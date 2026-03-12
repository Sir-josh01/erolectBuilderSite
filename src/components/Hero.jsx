import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-brand-dark overflow-hidden top-">
    
      <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-primary/10 skew-x-[-12deg] translate-x-20 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 py-30">
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
            <button className="px-8 py-4 bg-brand-primary hover:bg-sky-500 text-white font-bold rounded-sm transition-all shadow-lg hover:shadow-sky-500/20">
              View Portfolio
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white hover:bg-white hover:text-brand-dark font-bold rounded-sm transition-all">
              Request a Quote
            </button>
          </div>

          {/* Quick Stats / Trust Bar */}
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

        {/* Visual Content - Placeholder for a high-quality pool image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-brand-dark rounded-lg overflow-hidden border border-gray-800">
             {/* Replace the src with your actual project image path */}
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Swimming Pool Construction"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;