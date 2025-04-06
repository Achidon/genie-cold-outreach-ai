
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="w-full py-4 px-4 md:px-6 border-b">
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-xl font-bold">InboxGenie</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            Pricing
          </a>
        </nav>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors py-2">
              Pricing
            </a>
            <hr className="my-2" />
            <Button className="w-full" size="sm">Get Started</Button>
            <Button variant="outline" className="w-full" size="sm">Log In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
