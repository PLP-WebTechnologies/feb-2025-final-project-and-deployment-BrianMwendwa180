
import { useState, useEffect } from "react";
import { getFeaturedPosts, getRecentPosts, getAllCategories, BlogPost } from "@/lib/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Get featured post
    const featured = getFeaturedPosts();
    if (featured.length > 0) {
      setFeaturedPost(featured[0]);
    }
    
    // Get recent posts, excluding the featured one
    const recent = getRecentPosts().filter(post => 
      featured.length > 0 ? post.id !== featured[0].id : true
    );
    setRecentPosts(recent);
    
    // Get all categories
    setCategories(getAllCategories());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Featured Post */}
        <section className="container mx-auto px-4 py-8">
          {featuredPost && <FeaturedPost post={featuredPost} />}
        </section>
        
        {/* Recent Posts Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-merriweather font-bold">Recent Posts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.slice(0, 6).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {recentPosts.length > 6 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </section>
        
        {/* Categories Section */}
        <section className="bg-gray-50 py-16 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold mb-12 text-center">Browse by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(category => (
                <div 
                  key={category} 
                  className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    Explore articles about {category.toLowerCase()}
                  </p>
                  <Button variant="outline" asChild>
                    <a href={`/categories/${category.toLowerCase()}`}>View Articles</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-primary/5 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-merriweather font-bold mb-4">Stay in the Loop</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest articles, updates, and exclusive content directly in your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
