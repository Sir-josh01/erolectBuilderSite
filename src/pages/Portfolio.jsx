import React, { useState } from 'react';

const projects = [
  { id: 1, category: 'Pools', title: 'Infinity Edge Oasis', img: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800' },
  { id: 2, category: 'Construction', title: 'Modern Office Complex', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800' },
  { id: 3, category: 'Pools', title: 'Olympic Lap Pool', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800' },
  { id: 4, category: 'Construction', title: 'Luxury Villa Foundation', img: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=800' },
  { id: 5, category: 'Pools', title: 'Geometric Rooftop Pool', img: 'https://images.unsplash.com/photo-1565039014525-452140880f0e?auto=format&fit=crop&w=800' },
  { id: 6, category: 'Construction', title: 'Steel Frame Warehouse', img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Featured Work</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Pools', 'Construction'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-sm bg-brand-dark aspect-square"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-bold">
                  {project.title}
                </h4>
                <button className="mt-4 text-white text-sm font-bold border-b-2 border-brand-primary w-fit">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;