
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Calendar, MapPin, Edit } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  // Mock user data - in a real app, this would come from API or context
  const user = {
    name: 'Alex Green',
    email: 'alex@example.com',
    joined: 'January 2023',
    location: 'San Francisco, CA',
    bio: 'Passionate about sustainable event planning and reducing environmental impact through eco-friendly celebrations.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-eco-leaf mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-eco-forest/30 rounded-xl overflow-hidden shadow-sm border border-green-100 dark:border-green-900">
            <div className="relative h-48 bg-gradient-to-r from-eco-leaf to-eco-forest">
              <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors">
                <Edit size={18} />
              </button>
            </div>
            
            <div className="px-6 pb-6 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12 mb-6">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-md">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className="text-2xl bg-eco-leaf text-white">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-grow">
                  <h1 className="text-2xl font-bold text-eco-forest dark:text-white">{user.name}</h1>
                  <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
                </div>
                
                <button className="btn-eco-secondary mt-4 md:mt-0">
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-2 rounded-full text-eco-leaf mt-1">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                      <p className="text-eco-forest dark:text-white">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-2 rounded-full text-eco-leaf mt-1">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</h3>
                      <p className="text-eco-forest dark:text-white">{user.joined}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-2 rounded-full text-eco-leaf mt-1">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                      <p className="text-eco-forest dark:text-white">{user.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-2 rounded-full text-eco-leaf mt-1">
                      <User size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Events Created</h3>
                      <p className="text-eco-forest dark:text-white">8 events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
            <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-4">Recent Events</h2>
            
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>You haven't created any events yet.</p>
              <Link to="/venue-analysis" className="btn-eco-primary mt-4 inline-flex">
                Create Your First Event
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
