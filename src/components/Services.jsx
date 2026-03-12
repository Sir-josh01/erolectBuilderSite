import React from 'react';
// Icons can be replaced with Lucide-react or FontAwesome later
const services = [
  {
    title: "Aquatic Engineering",
    desc: "Custom infinity pools, Olympic-sized lap pools, and luxury residential oasis design.",
    icon: "🏊‍♂️"
  },
  {
    title: "Civil Construction",
    desc: "From foundation to finishing. High-rise residential and commercial structural builds.",
    icon: "🏗️"
  },
  {
    title: "Renovation & Repair",
    desc: "Modernizing legacy structures and pool resurfacing with premium materials.",
    icon: "🛠️"
  },
  {
    title: "Landscape Integration",
    desc: "Seamlessly blending water features with outdoor living spaces and hardscaping.",
    icon: "🌿"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 md:mx-0 md:px-2 sm:mx-0 text-center">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Comprehensive Construction <br /> & Water Solutions
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm sm:mx-auto ">
            We don't just build; we engineer environments that stand the test of time and climate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:bg-brand-primary dark:hover:bg-brand-primary transition-all duration-500 cursor-default"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-white">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-sky-100 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;