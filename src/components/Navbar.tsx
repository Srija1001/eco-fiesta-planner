
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarDays, Home, User, Menu, X, Settings, LogOut } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const links = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'Events', path: '/events', icon: CalendarDays },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-eco-forest/90 border-b border-green-100 dark:border-green-900">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="md" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 py-2 px-3 rounded-full transition-colors ${
                  isActive(link.path)
                    ? 'bg-eco-leaf text-white font-medium'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-eco-sand/30 dark:hover:bg-eco-moss/30'
                }`}
              >
                <link.icon size={18} />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link 
              to="/login" 
              className="flex items-center gap-2 py-2 px-4 text-eco-forest dark:text-white hover:text-eco-leaf dark:hover:text-eco-leaf transition-colors"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNav}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-eco-leaf text-white font-medium'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-eco-sand/30 dark:hover:bg-eco-moss/30'
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-eco-forest dark:text-white hover:bg-eco-sand/30 dark:hover:bg-eco-moss/30 transition-colors"
              >
                <LogOut size={20} />
                <span>Log Out</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
