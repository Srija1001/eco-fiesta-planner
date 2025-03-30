
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Calendar, Filter, SlidersHorizontal, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  
  const events = [
    {
      id: '1',
      title: 'Green Wedding Ceremony',
      date: 'June 15, 2023',
      time: '3:00 PM',
      location: 'Botanical Gardens, New York',
      attendees: 120,
      imageUrl: 'https://source.unsplash.com/random/600x400/?wedding,garden'
    },
    {
      id: '2',
      title: 'Corporate Sustainability Conference',
      date: 'July 8, 2023',
      time: '9:00 AM',
      location: 'Eco Convention Center, San Francisco',
      attendees: 350,
      imageUrl: 'https://source.unsplash.com/random/600x400/?conference,business'
    },
    {
      id: '3',
      title: 'Zero Waste Birthday Party',
      date: 'August 21, 2023',
      time: '1:00 PM',
      location: 'Mountain View Park, Colorado',
      attendees: 45,
      imageUrl: 'https://source.unsplash.com/random/600x400/?birthday,party'
    },
    {
      id: '4',
      title: 'Sustainable Fashion Show',
      date: 'September 5, 2023',
      time: '7:00 PM',
      location: 'Modern Art Gallery, Austin',
      attendees: 230,
      imageUrl: 'https://source.unsplash.com/random/600x400/?fashion,show'
    },
    {
      id: '5',
      title: 'Eco-Friendly Product Launch',
      date: 'October 15, 2023',
      time: '5:30 PM',
      location: 'Green Innovations Hub, Seattle',
      attendees: 175,
      imageUrl: 'https://source.unsplash.com/random/600x400/?product,launch'
    },
    {
      id: '6',
      title: 'Community Garden Festival',
      date: 'May 28, 2023',
      time: '10:00 AM',
      location: 'Urban Farms, Portland',
      attendees: 320,
      imageUrl: 'https://source.unsplash.com/random/600x400/?garden,festival'
    }
  ];

  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-eco-forest dark:text-white mb-2">My Events</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage and track your sustainable events
            </p>
          </div>
          
          <Link 
            to="/venue-analysis" 
            className="btn-eco-primary mt-4 md:mt-0 inline-flex items-center"
          >
            <Plus size={18} className="mr-2" />
            Create New Event
          </Link>
        </div>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {['All', 'Upcoming', 'Past', 'Draft'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.toLowerCase()
                    ? 'bg-eco-leaf text-white'
                    : 'bg-white dark:bg-eco-forest/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-eco-forest/50 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Link to="/events" className="bg-white dark:bg-eco-forest/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-eco-forest/50 flex items-center">
              <Calendar size={20} />
            </Link>
            <button className="bg-white dark:bg-eco-forest/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-eco-forest/50">
              <Filter size={20} />
            </button>
            <button className="bg-white dark:bg-eco-forest/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-eco-forest/50">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              attendees={event.attendees}
              imageUrl={event.imageUrl}
              onClick={() => handleEventClick(event.id)}
            />
          ))}
        </div>
        
        {/* Eco Impact Stats */}
        <div className="mt-12 bg-white dark:bg-eco-forest/30 rounded-xl p-6 border border-green-100 dark:border-green-900 shadow-sm">
          <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-4 flex items-center">
            <Leaf className="mr-2 text-eco-leaf" size={20} />
            Your Environmental Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">CO₂ Emissions Saved</p>
              <p className="text-2xl font-bold text-eco-forest dark:text-white">1,240 kg</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-eco-leaf h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Waste Reduced</p>
              <p className="text-2xl font-bold text-eco-forest dark:text-white">320 kg</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-eco-leaf h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Trees Equivalent</p>
              <p className="text-2xl font-bold text-eco-forest dark:text-white">42 trees</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-eco-leaf h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
