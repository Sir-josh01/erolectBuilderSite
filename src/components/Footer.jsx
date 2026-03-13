import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & Mission */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-sm">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">
              EROLECT<span className="text-brand-primary text-sm uppercase ml-1">Builders</span>
            </span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
            Setting the standard in high-end aquatic engineering and structural development. 
            From concept to completion, we build with precision and integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-brand-primary transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-brand-primary transition-colors">Featured Projects</a></li>
            <li><a href="#process" className="hover:text-brand-primary transition-colors">Our Process</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Get a Quote</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Abuja, Nigeria</li>
            <li>contact@erolect.com</li>
            <li>+234 800 EROLECT</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; {currentYear} Erolect Builders. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;