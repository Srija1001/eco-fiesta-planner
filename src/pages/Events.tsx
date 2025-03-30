
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Calendar, Filter, SlidersHorizontal, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-eco-forest dark:text-white mb-2">All Events</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Browse and manage your sustainable events
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
        
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="search"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="eco-input pl-10 w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="bg-white dark:bg-eco-forest/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-eco-forest/50">
              <Filter size={20} />
            </button>
            <button className="bg-white dark:bg-eco-forest/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-eco-forest/50">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
        
        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
            <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-2">No events found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search criteria or create a new event</p>
            <Link to="/venue-analysis" className="btn-eco-primary inline-flex items-center">
              <Plus size={18} className="mr-2" />
              Create New Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
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
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
