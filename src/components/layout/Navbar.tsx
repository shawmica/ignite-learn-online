
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Book } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Book className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-primary-800">Ignite Learn</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                Home
              </Link>
              <Link to="/courses" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                Courses
              </Link>
              <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
              Home
            </Link>
            <Link to="/courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
              Courses
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
              Dashboard
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link to="/login" className="block w-full">
                <Button variant="outline" className="w-full mb-2">
                  Log In
                </Button>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <Link to="/signup" className="block w-full">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
