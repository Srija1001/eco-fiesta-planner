
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckSquare, Square, Plus, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import { useToast } from '../hooks/use-toast';

// Mock event data - in a real app, this would come from an API
const events = [
  {
    id: '1',
    title: 'Green Wedding Ceremony',
    date: 'June 15, 2023',
    time: '3:00 PM',
    location: 'Botanical Gardens, New York',
    attendees: 120,
    imageUrl: 'https://source.unsplash.com/random/600x400/?wedding,garden',
    description: 'A beautiful eco-friendly wedding ceremony at the botanical gardens with sustainable decorations and locally-sourced catering.'
  },
  {
    id: '2',
    title: 'Corporate Sustainability Conference',
    date: 'July 8, 2023',
    time: '9:00 AM',
    location: 'Eco Convention Center, San Francisco',
    attendees: 350,
    imageUrl: 'https://source.unsplash.com/random/600x400/?conference,business',
    description: 'Annual conference bringing together industry leaders to discuss sustainable business practices and environmental initiatives.'
  },
  {
    id: '3',
    title: 'Zero Waste Birthday Party',
    date: 'August 21, 2023',
    time: '1:00 PM',
    location: 'Mountain View Park, Colorado',
    attendees: 45,
    imageUrl: 'https://source.unsplash.com/random/600x400/?birthday,party',
    description: 'A fun birthday celebration with zero waste principles, featuring reusable decorations and plastic-free activities.'
  },
  {
    id: '4',
    title: 'Sustainable Fashion Show',
    date: 'September 5, 2023',
    time: '7:00 PM',
    location: 'Modern Art Gallery, Austin',
    attendees: 230,
    imageUrl: 'https://source.unsplash.com/random/600x400/?fashion,show',
    description: 'Showcasing eco-friendly fashion designs made from sustainable and recycled materials.'
  },
  {
    id: '5',
    title: 'Eco-Friendly Product Launch',
    date: 'October 15, 2023',
    time: '5:30 PM',
    location: 'Green Innovations Hub, Seattle',
    attendees: 175,
    imageUrl: 'https://source.unsplash.com/random/600x400/?product,launch',
    description: 'Launching our new line of biodegradable household products that help reduce environmental impact.'
  },
  {
    id: '6',
    title: 'Community Garden Festival',
    date: 'May 28, 2023',
    time: '10:00 AM',
    location: 'Urban Farms, Portland',
    attendees: 320,
    imageUrl: 'https://source.unsplash.com/random/600x400/?garden,festival',
    description: 'A celebration of community gardening with workshops on composting, seed saving, and sustainable growing practices.'
  }
];

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const event = events.find(event => event.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-eco-forest dark:text-white mb-4">Event not found</h1>
        <Link to="/dashboard" className="btn-eco-primary">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-eco-leaf mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-eco-forest/30 rounded-xl overflow-hidden shadow-sm border border-green-100 dark:border-green-900">
              <div className="h-64 relative">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
                  <div className="flex items-center text-white/90 text-sm">
                    <Users size={16} className="mr-1" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-eco-leaf mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                      <p className="font-medium text-eco-forest dark:text-white">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock size={20} className="text-eco-leaf mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                      <p className="font-medium text-eco-forest dark:text-white">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin size={20} className="text-eco-leaf mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium text-eco-forest dark:text-white">{event.location}</p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-3">About This Event</h2>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                
                <div className="mt-6 flex space-x-3">
                  <Link to={`/venue-analysis?eventId=${id}`} className="btn-eco-primary">
                    Get Decoration Ideas
                  </Link>
                  <button className="btn-eco-secondary">
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* To-Do List */}
          <div className="lg:col-span-1">
            <TodoList eventId={id} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetails;
