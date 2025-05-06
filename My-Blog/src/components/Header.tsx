
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and site title */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-merriweather font-bold text-primary">Blogify</h1>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/categories/technology" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Technology
            </Link>
            <Link 
              to="/categories/design" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Design
            </Link>
            <Link 
              to="/categories/development" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Development
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              className="mr-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 fade-in">
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center space-y-6 p-8">
              <Link 
                to="/" 
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/categories/technology" 
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Technology
              </Link>
              <Link 
                to="/categories/design" 
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Design
              </Link>
              <Link 
                to="/categories/development" 
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Development
              </Link>
              <Link 
                to="/about" 
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
            </nav>
          </div>
        )}

        {/* Search overlay */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-lg p-4 border-t border-gray-100 fade-in">
            <SearchBar onClose={toggleSearch} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
