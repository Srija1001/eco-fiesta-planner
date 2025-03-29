
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Calendar, Palette, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Sustainable Event Planning',
      description: 'Plan eco-friendly events from start to finish with comprehensive tools and resources.'
    },
    {
      icon: Palette,
      title: 'AI Decoration Suggestions',
      description: 'Get personalized, sustainable decoration ideas based on your venue photos and preferences.'
    },
    {
      icon: TrendingUp,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and reduce the environmental impact of your events with our tracking tools.'
    },
    {
      icon: Award,
      title: 'DIY Eco-Decorations',
      description: 'Access a library of DIY tutorials for creating beautiful, sustainable decorations.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 flex justify-between items-center bg-white/80 dark:bg-eco-forest/80 backdrop-blur-md">
        <Logo size="lg" />
        <div className="flex gap-4">
          <Link to="/login" className="btn-eco-secondary">
            Log In
          </Link>
          <Link to="/signup" className="btn-eco-primary">
            Sign Up
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden leaf-pattern">
          <div className="leaf-decoration w-64 h-64 top-10 right-0 opacity-20 animate-leaf-sway" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M142.5,48.5c0,0-37.4,-37.4 -87.5,-37.4C112.7,37 142.5,87.9 142.5,87.9L55,175.4C55,175.4 92.4,212.9 142.5,212.9C176.7,212.9 209.7,193.8 230,162.9C250.3,132 255.8,93.3 244.7,57.6C233.6,21.9 204.6,-5.3 168.1,-15C131.6,-24.7 92.2,-15.7 63.3,8C34.3,31.7 -79.8,142.9 55,175.4' fill='%234CAF5020'/%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-eco-leaf/10 dark:bg-eco-leaf/20 px-4 py-2 rounded-full text-eco-leaf font-medium mb-4">
                <div className="flex items-center gap-2">
                  <Leaf size={16} />
                  <span>Eco-Friendly Event Planning</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-forest dark:text-white leading-tight mb-6">
                Plan Sustainable Events with <span className="text-eco-leaf">Eco Fiesta</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Create beautiful, memorable events that are kind to the planet with our AI-powered decoration suggestions and sustainable planning tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="btn-eco-primary text-lg py-3 px-8">
                  Get Started
                </Link>
                <Link to="/login" className="btn-eco-secondary text-lg py-3 px-8">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Preview Image */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-eco-leaf/20 to-eco-sunset/20 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://source.unsplash.com/random/1200x600/?sustainable,event,decoration" 
                  alt="Eco Fiesta App Preview" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-eco-forest rounded-2xl p-4 shadow-lg transform rotate-3 animate-pulse">
                <Leaf size={36} className="text-eco-leaf" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-eco-sand/30 dark:bg-eco-forest/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-eco-leaf font-medium">Why Choose Eco Fiesta</span>
              <h2 className="text-3xl md:text-4xl font-bold text-eco-forest dark:text-white mt-2">
                Features that Make a Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="eco-card p-6">
                  <div className="bg-eco-leaf/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <feature.icon size={28} className="text-eco-leaf" />
                  </div>
                  <h3 className="text-xl font-semibold text-eco-forest dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-eco-leaf to-eco-forest rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Plan Your Eco-Friendly Event?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join thousands of event planners who are making a positive impact on the planet.
                  </p>
                  <Link to="/signup" className="inline-flex items-center bg-white text-eco-forest font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
                    Get Started Today
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
