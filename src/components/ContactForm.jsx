import React from 'react';

const ContactForm = () => {
  return (
    // <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
    //   <div className="container mx-auto px-6 max-w-4xl">
    //     <div className="bg-white dark:bg-gray-800 p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-brand-primary">
    //       <div className="text-center mb-10">
    //         <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Request a Professional Quote</h3>
    //         <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">Let's discuss your next pool or construction project</p>
    //       </div>

    //       <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <input 
    //           type="text" 
    //           placeholder="Full Name" 
    //           className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none text-gray-900 dark:text-white"
    //         />
    //         <input 
    //           type="email" 
    //           placeholder="Email Address" 
    //           className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none text-gray-900 dark:text-white"
    //         />
    //         <select className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none text-gray-500 md:col-span-2">
    //           <option>Project Type: Swimming Pool</option>
    //           <option>Project Type: General Construction</option>
    //           <option>Project Type: Maintenance/Renovation</option>
    //         </select>
    //         <textarea 
    //           placeholder="Tell us about your project..." 
    //           rows="4" 
    //           className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none text-gray-900 dark:text-white md:col-span-2"
    //         />
    //         <button className="md:col-span-2 py-4 bg-brand-primary hover:bg-sky-500 text-white font-bold text-lg transition-all tracking-widest">
    //           SEND REQUEST
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-brand-dark shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
          
          {/* Left Side: Contact Info */}
          <div className="bg-brand-primary p-12 text-white md:w-2/5">
            <h3 className="text-3xl font-bold mb-6">Let's build something great.</h3>
            <p className="text-sky-100 mb-12 text-sm leading-relaxed">
              Ready to start your project? Reach out for a structural assessment or a customized pool design quote.
            </p>
            
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-70">Location</p>
                <p>Abuja, Nigeria</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-70">Email</p>
                <p>projects@erolect.com</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-70">Business Hours</p>
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-12 md:w-3/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Name</label>
                  <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 outline-none focus:border-brand-primary transition-colors text-gray-900 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone</label>
                  <input type="tel" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 outline-none focus:border-brand-primary transition-colors text-gray-900 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Project Type</label>
                <select className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 outline-none focus:border-brand-primary transition-colors text-gray-500">
                  <option>Select a service...</option>
                  <option>Swimming Pool Construction</option>
                  <option>Residential Building</option>
                  <option>Renovation/Maintenance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows="4" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 outline-none focus:border-brand-primary transition-colors text-gray-900 dark:text-white"></textarea>
              </div>

              <button className="w-full py-4 bg-brand-primary hover:bg-sky-500 text-white font-bold tracking-[0.2em] text-xs transition-all cursor-pointer">
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;