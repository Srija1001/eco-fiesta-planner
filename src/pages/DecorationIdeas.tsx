
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Search, Filter, ArrowLeft, SlidersHorizontal, Bookmark, ThumbsUp, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DecorationSuggestion from '../components/DecorationSuggestion';

const DecorationIdeas = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const decorationIdeas = [
    {
      id: '1',
      title: 'Botanical Garden Theme',
      description: 'Embrace natural elements with potted plants, sustainable flower arrangements, and botanical table settings.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?botanical,garden',
      colors: ['#4CAF50', '#81C784', '#E8F5E9', '#F1F8E9', '#5D4037'],
      ecoScore: 95,
      priceRange: '$$ • Moderate',
      hasDIY: true,
      diyLink: '#',
      category: 'natural'
    },
    {
      id: '2',
      title: 'Upcycled Mason Jar Lighting',
      description: 'Transform glass jars into enchanting light fixtures with LED fairy lights for a magical atmosphere.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?mason,jar,lights',
      colors: ['#FFC107', '#FFECB3', '#FFD54F', '#FFF8E1', '#5D4037'],
      ecoScore: 90,
      priceRange: '$ • Budget-friendly',
      hasDIY: true,
      diyLink: '#',
      category: 'lighting'
    },
    {
      id: '3',
      title: 'Recycled Paper Decor',
      description: 'Create stunning decorations from recycled paper - from origami centerpieces to paper bunting.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?paper,craft',
      colors: ['#FAFAFA', '#ECEFF1', '#90A4AE', '#607D8B', '#455A64'],
      ecoScore: 98,
      priceRange: '$ • Budget-friendly',
      hasDIY: true,
      diyLink: '#',
      category: 'paper'
    },
    {
      id: '4',
      title: 'Natural Fabric Draping',
      description: 'Organic cotton and linen draping that adds elegance while being environmentally conscious.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?fabric,drape',
      colors: ['#EFEBE9', '#D7CCC8', '#BCAAA4', '#8D6E63', '#4E342E'],
      ecoScore: 85,
      priceRange: '$$ • Moderate',
      hasDIY: false,
      category: 'fabric'
    },
    {
      id: '5',
      title: 'Reclaimed Wood Signage',
      description: 'Handcrafted signs and displays made from reclaimed wood for a rustic, eco-friendly touch.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?wood,sign',
      colors: ['#795548', '#A1887F', '#D7CCC8', '#EFEBE9', '#3E2723'],
      ecoScore: 92,
      priceRange: '$$ • Moderate',
      hasDIY: true,
      diyLink: '#',
      category: 'wood'
    },
    {
      id: '6',
      title: 'Living Plant Centerpieces',
      description: 'Potted succulents and herbs that serve as centerpieces during the event and can be taken home afterward.',
      imageUrl: 'https://source.unsplash.com/random/600x400/?succulent,centerpiece',
      colors: ['#66BB6A', '#81C784', '#C8E6C9', '#E8F5E9', '#33691E'],
      ecoScore: 100,
      priceRange: '$$ • Moderate',
      hasDIY: true,
      diyLink: '#',
      category: 'natural'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Ideas' },
    { id: 'natural', name: 'Natural Elements' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'paper', name: 'Paper Crafts' },
    { id: 'fabric', name: 'Fabric & Textiles' },
    { id: 'wood', name: 'Wood & Rustic' }
  ];

  const filteredIdeas = decorationIdeas.filter(idea => {
    const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/venue-analysis" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-eco-leaf dark:hover:text-eco-leaf mb-4">
            <ArrowLeft size={18} className="mr-2" />
            Back to Venue Analysis
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-eco-forest dark:text-white mb-2 flex items-center">
                <Leaf className="mr-2 text-eco-leaf" size={24} />
                Eco-Friendly Decoration Ideas
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Sustainable decoration suggestions based on your venue image
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <button className="btn-eco-secondary flex items-center">
                <Bookmark size={18} className="mr-2" />
                Save Collection
              </button>
            </div>
          </div>
        </div>
        
        {/* Venue Preview */}
        <div className="mb-8 p-4 bg-white dark:bg-eco-forest/30 rounded-xl shadow-sm border border-green-100 dark:border-green-900">
          <h2 className="text-xl font-semibold mb-4 text-eco-forest dark:text-white">Your Venue</h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                <img 
                  src="https://source.unsplash.com/random/600x400/?venue,hall" 
                  alt="Your Venue" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Venue Size</p>
                  <p className="text-lg font-semibold text-eco-forest dark:text-white">Large (2500 sq ft)</p>
                </div>
                <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Natural Light</p>
                  <p className="text-lg font-semibold text-eco-forest dark:text-white">High</p>
                </div>
                <div className="bg-eco-leaf/10 dark:bg-eco-leaf/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Existing Colors</p>
                  <div className="flex gap-1 mt-1">
                    {['#FAFAFA', '#EFEBE9', '#D7CCC8', '#BCAAA4'].map((color, index) => (
                      <div 
                        key={index} 
                        className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700" 
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-eco-forest dark:text-white mb-2">AI Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This venue has high ceilings and abundant natural light, making it perfect for botanical and natural-themed decorations. The neutral color palette provides an excellent canvas for sustainable decor elements.
                </p>
              </div>
              
              <div className="mt-4">
                <button className="text-eco-leaf hover:text-eco-moss font-medium flex items-center">
                  <PlayCircle size={18} className="mr-2" />
                  Watch venue walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="search"
              placeholder="Search decoration ideas..."
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
        
        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-eco-leaf text-white'
                    : 'bg-white dark:bg-eco-forest/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-eco-forest/50 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decoration Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIdeas.map((idea) => (
            <DecorationSuggestion
              key={idea.id}
              title={idea.title}
              description={idea.description}
              imageUrl={idea.imageUrl}
              colors={idea.colors}
              ecoScore={idea.ecoScore}
              priceRange={idea.priceRange}
              hasDIY={idea.hasDIY}
              diyLink={idea.diyLink}
            />
          ))}
        </div>
        
        {/* DIY Video Section */}
        <div className="bg-white dark:bg-eco-forest/30 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-eco-forest dark:text-white flex items-center">
            <PlayCircle className="mr-2 text-eco-leaf" size={20} />
            DIY Eco-Decoration Tutorials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Upcycled Mason Jar Lanterns', 
                duration: '5:24', 
                thumbnail: 'https://source.unsplash.com/random/600x400/?mason,jar' 
              },
              { 
                title: 'Paper Flower Centerpieces', 
                duration: '7:12', 
                thumbnail: 'https://source.unsplash.com/random/600x400/?paper,flower' 
              },
              { 
                title: 'Sustainable Table Settings', 
                duration: '4:45', 
                thumbnail: 'https://source.unsplash.com/random/600x400/?table,setting' 
              }
            ].map((video, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden cursor-pointer">
                <div className="aspect-video relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <PlayCircle size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="mt-2 font-medium text-eco-forest dark:text-white group-hover:text-eco-leaf transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="btn-eco-secondary">
              View All DIY Tutorials
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DecorationIdeas;
