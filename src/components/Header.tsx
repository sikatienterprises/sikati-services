import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg ">
              <img
                src="logo.png"
                className="w-10 h-10 transition-all duration-300 dark:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] dark:group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                alt="Logo"
              />
            </div>
            <span className="text-xl font-bold text-corporate dark:text-primary transition-colors duration-300">
              Sikati Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/how-it-works"
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1-800-STAFFPRO"
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              24/7 Emergency
            </a>
            <Button variant="outline" size="sm" asChild>
              <Link to="/quote">Get Quote</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/emergency">Emergency Staffing</Link>
            </Button>
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </Link>
              <Link
                to="/how-it-works"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/quote">Get Quote</Link>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/emergency">Emergency Staffing</Link>
                </Button>
                <div className="flex justify-center pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
