
import { Link } from "react-router-dom";
import { BlogPost } from "@/lib/blogData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/post/${post.id}`}>
      <Card className="overflow-hidden h-full flex flex-col card-hover">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>
          <h3 className="text-xl font-merriweather font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
