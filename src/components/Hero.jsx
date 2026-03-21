import React, { useState, useEffect } from 'react';

const Hero = () => {
  // 1. Array of high-quality images (Pools + Construction)
  const images = [
    "/pool-1.jpg",
    "/pool-2.jpg",
    "/pool-3.jpg",
    "/pool-4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Logic to change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-dark overflow-hidden">
      
      <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-primary/10 skew-x-[-12deg] translate-x-20 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 py-20 pt-40 pb-12 md:py-30">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Crafting <span className="text-brand-primary">Luxe</span> <br /> 
              Pools & Structures
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              From sophisticated aquatic retreats to robust commercial construction, 
              we bring precision engineering and high-end aesthetics to every square foot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href='#projects' className="px-8 py-4 bg-brand-primary hover:bg-sky-500 text-white text-center font-bold rounded-sm transition-all shadow-lg hover:shadow-sky-500/20 active:scale-95">
              View Portfolio
            </a>
            <a href='#contact' className="px-8 py-4 border border-gray-600 text-white text-center hover:bg-white hover:text-brand-dark font-bold rounded-sm transition-all active:scale-95">
              Request a Quote
            </a>
          </div>

          <div className="pt-8 border-t border-gray-800 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">450+</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Sliding Visual Content */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-brand-dark rounded-lg overflow-hidden border border-gray-800 h-[500px]">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
              />
            ))}
          </div>
          
          {/* Optional: Slide Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`h-1 w-6 rounded-full transition-all ${
                  index === currentIndex ? 'bg-brand-primary' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;