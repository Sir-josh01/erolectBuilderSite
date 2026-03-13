import React from 'react';

const Process = () => {
  const steps = [
    { num: "01", title: "Consultation", desc: "Site visit and structural assessment to understand your vision." },
    { num: "02", title: "Design & Plan", desc: "Detailed 3D blueprints and material selection for your approval." },
    { num: "03", title: "Construction", desc: "Precision engineering and building with constant quality checks." },
    { num: "04", title: "Final Handover", desc: "The final splash or walk-through. Your project is ready for use." }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">The Journey</h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">How We Build</h3>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 border border-gray-100 dark:border-gray-800 rounded-sm">
              <span className="text-5xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-4 z-0">
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;