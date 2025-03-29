
import React from 'react';
import { Leaf, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-sand/30 dark:bg-eco-forest/50 pt-10 pb-6 border-t border-green-100 dark:border-green-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="lg" />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Eco Fiesta helps you plan sustainable events that leave a positive impact on both your guests and the planet.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-eco-forest dark:text-white flex items-center gap-2">
              <Leaf size={16} className="text-eco-leaf" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Decorations', 'Vendors', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-eco-leaf dark:hover:text-eco-leaf transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-eco-forest dark:text-white flex items-center gap-2">
              <Leaf size={16} className="text-eco-leaf" />
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-eco-leaf text-white p-2 rounded-full hover:bg-eco-moss transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-eco-leaf text-white p-2 rounded-full hover:bg-eco-moss transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-eco-leaf text-white p-2 rounded-full hover:bg-eco-moss transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter for eco-friendly event tips.
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-100 dark:border-green-900 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Eco Fiesta. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-eco-sunset" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
