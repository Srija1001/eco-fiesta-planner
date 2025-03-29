
import React from 'react';
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  imageUrl: string;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  attendees,
  imageUrl,
  onClick
}) => {
  return (
    <div 
      className="eco-card overflow-hidden cursor-pointer group animate-scale-in"
      onClick={onClick}
    >
      <div className="h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <p className="text-white text-xs font-medium px-2 py-1 rounded-full bg-eco-leaf/90 inline-flex items-center">
            <Users size={12} className="mr-1" /> {attendees} attendees
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-eco-forest dark:text-white">{title}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <CalendarDays size={16} className="mr-2 text-eco-leaf" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock size={16} className="mr-2 text-eco-leaf" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin size={16} className="mr-2 text-eco-leaf" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
