
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById, BlogPost } from "@/lib/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchedPost = getPostById(id);
      setPost(fetchedPost || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/" 
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          
          {/* Back Button */}
          <div className="absolute top-6 left-6 z-20">
            <Link 
              to="/" 
              className="flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </div>
        </div>
        
        {/* Article Container */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {post.category}
                </Badge>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-merriweather font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </header>
            
            {/* Article Content */}
            <div className="blog-content">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Article Footer - Share & Comments */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                <h3 className="text-lg font-bold">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Twitter
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Facebook
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    LinkedIn
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
