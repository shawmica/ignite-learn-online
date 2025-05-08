
import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-primary-800">Ignite Learn</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Empowering education through interactive online learning
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/courses" className="text-base text-gray-500 hover:text-primary-600">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-base text-gray-500 hover:text-primary-600">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to="/become-instructor" className="text-base text-gray-500 hover:text-primary-600">
                  Become an Instructor
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/help" className="text-base text-gray-500 hover:text-primary-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-primary-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-500 hover:text-primary-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-gray-500 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-500 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Ignite Learn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
