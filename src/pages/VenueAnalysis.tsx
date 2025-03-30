
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Camera, MapPin, Calendar, Clock, Users, ChevronRight, Loader2, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageUploader from '../components/ImageUploader';
import { useToast } from '../hooks/use-toast';

const VenueAnalysis = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState('');
  const [venueImage, setVenueImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const location2 = useLocation();
  
  // Extract eventId from query parameters if available
  const queryParams = new URLSearchParams(location2.search);
  const eventId = queryParams.get('eventId');
  
  useEffect(() => {
    // If we're coming from an event detail page, pre-fill the form
    if (eventId) {
      // In a real app, fetch the event details from an API
      // For now, we'll use mock data
      setEventName("My Eco-Event");
      setEventDate(new Date().toISOString().split('T')[0]);
      const hours = new Date().getHours().toString().padStart(2, '0');
      const minutes = new Date().getMinutes().toString().padStart(2, '0');
      setEventTime(`${hours}:${minutes}`);
      setLocation("Eco Venue");
      setAttendees("50");
    }
  }, [eventId]);

  const handleImageUpload = (file: File) => {
    setVenueImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!venueImage) {
      toast({
        title: "Venue image required",
        description: "Please upload an image of your venue to get decoration suggestions.",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate('/decoration-ideas');
      
      toast({
        title: "Analysis complete",
        description: "Check out our eco-friendly decoration suggestions for your venue!",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {eventId && (
            <button 
              onClick={() => navigate(`/events/${eventId}`)}
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-eco-leaf mb-6"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Event Details
            </button>
          )}
          
          <h1 className="text-3xl font-bold text-eco-forest dark:text-white mb-2">Create New Event</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Enter your event details and upload a venue image to get eco-friendly decoration suggestions
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Event Details */}
              <div className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
                <h2 className="text-xl font-semibold mb-4 text-eco-forest dark:text-white">Event Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Event Name
                    </label>
                    <input
                      id="eventName"
                      type="text"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      placeholder="Enter event name"
                      className="eco-input w-full"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          id="eventDate"
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="eco-input pl-10 w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          id="eventTime"
                          type="time"
                          value={eventTime}
                          onChange={(e) => setEventTime(e.target.value)}
                          className="eco-input pl-10 w-full"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter venue location"
                        className="eco-input pl-10 w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Number of Attendees
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        id="attendees"
                        type="number"
                        min="1"
                        value={attendees}
                        onChange={(e) => setAttendees(e.target.value)}
                        placeholder="Enter number of attendees"
                        className="eco-input pl-10 w-full"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Venue Image Upload */}
              <div className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900">
                <h2 className="text-xl font-semibold mb-4 text-eco-forest dark:text-white flex items-center">
                  <Camera className="mr-2 text-eco-leaf" size={20} />
                  Venue Image
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Upload an image of your venue to get AI-powered eco-friendly decoration suggestions.
                </p>
                
                <ImageUploader onImageUpload={handleImageUpload} />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="btn-eco-primary text-lg py-3 px-8 flex items-center"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Analyzing Venue...
                    </>
                  ) : (
                    <>
                      Get Decoration Ideas
                      <ChevronRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VenueAnalysis;
