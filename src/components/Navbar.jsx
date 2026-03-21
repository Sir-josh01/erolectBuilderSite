import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },

  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 border-2 border-b-mauve-50 ${
        isScrolled || isMenuOpen ? 'bg-white dark:bg-brand-dark py-4 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href='/'>
             <img 
                src="/logo.png"
                alt="logo-image"
                width={50}
                height={50}
              />
          </a>
         
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-sm">
              <span className="text-white font-black text-xl">E</span>
            </div>
            <span className={`text-xl font-bold tracking-tighter ${
              isScrolled || isMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              EROLECT<span className="text-brand-primary text-sm uppercase ml-1 font-bold">Builders</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`hover:text-brand-primary transition-colors ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-brand-primary hover:bg-sky-500 text-white px-6 py-3 rounded-sm font-bold transition-all hover:shadow-lg hover:shadow-sky-500/20 cursor-pointer">
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Toggle (Hamburger) */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-50 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-6 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''} ${isScrolled || isMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <div className={`fixed inset-0 bg-white dark:bg-brand-dark z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-gray-900 dark:text-white hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href='#contact'
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-brand-primary text-white px-10 py-4 rounded-sm font-bold text-lg cursor-pointer">
            GET A QUOTE
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;