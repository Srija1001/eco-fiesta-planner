
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Moon, Sun, Globe, Lock, User, Save } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-eco-leaf mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-eco-forest dark:text-white mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Settings Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-eco-forest/30 rounded-xl p-4 shadow-sm border border-green-100 dark:border-green-900">
                <nav className="space-y-1">
                  <a href="#profile" className="flex items-center gap-3 py-2 px-3 rounded-lg bg-eco-leaf/10 text-eco-leaf font-medium">
                    <User size={18} />
                    <span>Profile</span>
                  </a>
                  <a href="#notifications" className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-eco-leaf/10 hover:text-eco-leaf">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </a>
                  <a href="#appearance" className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-eco-leaf/10 hover:text-eco-leaf">
                    <Moon size={18} />
                    <span>Appearance</span>
                  </a>
                  <a href="#security" className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-eco-leaf/10 hover:text-eco-leaf">
                    <Lock size={18} />
                    <span>Security</span>
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Settings Content */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                {/* Profile Settings */}
                <div id="profile" className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
                  <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-4 flex items-center">
                    <User className="mr-2 text-eco-leaf" size={20} />
                    Profile Settings
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        defaultValue="Alex Green"
                        className="eco-input w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        defaultValue="alex@example.com"
                        className="eco-input w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          id="location"
                          type="text"
                          defaultValue="San Francisco, CA"
                          className="eco-input pl-10 w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows={4}
                        defaultValue="Passionate about sustainable event planning and reducing environmental impact through eco-friendly celebrations."
                        className="eco-input w-full"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button className="btn-eco-primary flex items-center">
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Appearance Settings */}
                <div id="appearance" className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
                  <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-4 flex items-center">
                    <Moon className="mr-2 text-eco-leaf" size={20} />
                    Appearance
                  </h2>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-eco-forest dark:text-white">Dark Mode</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Toggle between light and dark themes
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-eco-leaf focus:ring-offset-2"
                    >
                      <span className="sr-only">Toggle Dark Mode</span>
                      <span
                        className={`${
                          darkMode ? "translate-x-6 bg-eco-leaf" : "translate-x-1 bg-white"
                        } inline-block h-4 w-4 transform rounded-full transition-transform`}
                      />
                    </button>
                  </div>
                </div>
                
                {/* Notification Settings */}
                <div id="notifications" className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
                  <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-4 flex items-center">
                    <Bell className="mr-2 text-eco-leaf" size={20} />
                    Notification Settings
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-eco-forest dark:text-white">Email Notifications</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive notifications about your events via email
                        </p>
                      </div>
                      
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`${
                          emailNotifications ? "bg-eco-leaf" : "bg-gray-200 dark:bg-gray-700"
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-eco-leaf focus:ring-offset-2`}
                      >
                        <span className="sr-only">Toggle Email Notifications</span>
                        <span
                          className={`${
                            emailNotifications ? "translate-x-6 bg-white" : "translate-x-1 bg-white"
                          } inline-block h-4 w-4 transform rounded-full transition-transform`}
                        />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-eco-forest dark:text-white">Push Notifications</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive notifications about your events on your device
                        </p>
                      </div>
                      
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`${
                          pushNotifications ? "bg-eco-leaf" : "bg-gray-200 dark:bg-gray-700"
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-eco-leaf focus:ring-offset-2`}
                      >
                        <span className="sr-only">Toggle Push Notifications</span>
                        <span
                          className={`${
                            pushNotifications ? "translate-x-6 bg-white" : "translate-x-1 bg-white"
                          } inline-block h-4 w-4 transform rounded-full transition-transform`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
