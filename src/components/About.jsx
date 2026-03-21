import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-brand-dark transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual "Structure" */}
          <div className="relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="/mr-K.jpg" 
                alt="Architectural Planning" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Architectural Grid Overlay Decoration */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-primary/10 -z-0 border border-brand-primary/20 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 border-l-4 border-t-4 border-brand-primary w-24 h-24 z-20"></div>
          </div>

          {/* Right Side: Mission & Values */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Engineering <span className="text-brand-primary">Precision</span> <br /> 
                Behind Every Design.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                At <span className="font-bold text-gray-900 dark:text-white">EROLECT Builders</span>, we believe that luxury is nothing without structural integrity. Whether we are crafting an infinity-edge pool or a multi-level commercial complex, our approach remains the same: <strong>think first, build once.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">01</div>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">Quality Materials</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">We never compromise on the grade of steel or concrete, ensuring 50-year durability.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">02</div>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">Expert Oversight</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Every project is managed by certified structural engineers from Abuja's leading firms.</p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 group text-brand-primary font-bold uppercase tracking-widest text-xs"
              >
                Learn more about our standards
                <span className="w-12 h-[2px] bg-brand-primary group-hover:w-20 transition-all duration-300"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;