import React from 'react';

const WhyChooseUs = () => {
  const highlights = [
    { title: "Precision Engineering", desc: "Every pool and structure is built to exceed national safety and durability standards." },
    { title: "Transparent Pricing", desc: "No hidden costs. Detailed project estimates provided before the first shovel hits the ground." },
    { title: "Post-Build Support", desc: "We don't just leave after the job. We offer maintenance and structural warranties." }
  ];

  return (
    <section id='about' className="py-20 bg-white dark:bg-brand-dark">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {highlights.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <div className="w-12 h-1 px-0 bg-brand-primary" /> {/* Accented Line */}
            <h4 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;