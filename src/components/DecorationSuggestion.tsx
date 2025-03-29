
import React from 'react';
import { ExternalLink, ThumbsUp, ThumbsDown, Bookmark } from 'lucide-react';

interface DecorationSuggestionProps {
  title: string;
  description: string;
  imageUrl: string;
  colors: string[];
  ecoScore: number;
  priceRange: string;
  hasDIY?: boolean;
  diyLink?: string;
}

const DecorationSuggestion: React.FC<DecorationSuggestionProps> = ({
  title,
  description,
  imageUrl,
  colors,
  ecoScore,
  priceRange,
  hasDIY = false,
  diyLink = '#'
}) => {
  const scoreColor = ecoScore > 80 
    ? 'text-green-600' 
    : ecoScore > 60 
      ? 'text-yellow-600' 
      : 'text-red-600';

  return (
    <div className="eco-card overflow-hidden">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        {hasDIY && (
          <div className="absolute top-3 right-3">
            <a
              href={diyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-eco-forest/80 text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center hover:bg-eco-forest transition-colors"
            >
              DIY Guide <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/90 dark:bg-eco-forest/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
            {priceRange}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-eco-forest dark:text-white">{title}</h3>
          <div className={`text-lg font-bold ${scoreColor}`}>
            {ecoScore}%
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{description}</p>
        
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Suggested Colors:</p>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" 
                style={{ backgroundColor: color }}
                title={color}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ThumbsUp size={18} className="text-gray-500 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ThumbsDown size={18} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bookmark size={18} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecorationSuggestion;
