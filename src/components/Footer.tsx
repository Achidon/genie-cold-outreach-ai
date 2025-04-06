
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-lg font-bold">InboxGenie</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              AI-powered cold email sequences that help businesses connect with prospects, partners, and talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-primary-600">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Cold Email Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Templates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} InboxGenie. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
