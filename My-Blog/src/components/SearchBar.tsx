
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchPosts } from "@/lib/blogData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ id: string; title: string }[]>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      const searchResults = searchPosts(value).map(post => ({
        id: post.id,
        title: post.title,
      }));
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (id: string) => {
    navigate(`/post/${id}`);
    setQuery("");
    setResults([]);
    if (onClose) onClose();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.length > 2) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
      setResults([]);
      if (onClose) onClose();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearchSubmit} className="relative">
        <Input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={handleSearch}
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Button type="submit" className="sr-only">
          Search
        </Button>
      </form>

      {results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          <ul className="py-2">
            {results.map((result) => (
              <li key={result.id}>
                <button
                  onClick={() => handleResultClick(result.id)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {result.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
