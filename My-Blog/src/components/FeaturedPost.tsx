
import { Link } from "react-router-dom";
import { BlogPost } from "@/lib/blogData";
import { Badge } from "@/components/ui/badge";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Link to={`/post/${post.id}`} className="block group">
      <div className="relative h-[500px] overflow-hidden rounded-xl">
        {/* Featured Image with Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
          <Badge className="self-start mb-4 bg-primary hover:bg-primary/90">
            Featured
          </Badge>
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-white">{post.title}</h2>
          <p className="text-white/90 mb-6 max-w-2xl">{post.excerpt}</p>
          
          {/* Author and Meta Info */}
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-4 border-2 border-white/50"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center text-sm text-white/80">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
