import React, { useState } from 'react';

const ContactForm = () => {
  // 1. State to manage form data
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // 2. We will use Formspree (Free & No Backend needed)
    // You just replace 'YOUR_FORM_ID' with the ID they give you
    const response = await fetch("https://formspree.io/f/xeerwedy", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-brand-dark shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
          
          {/* Left Side: Contact Info */}
          <div className="bg-brand-primary p-12 text-white md:w-2/5">
            <h3 className="text-3xl font-bold mb-6">Let's build something great.</h3>
            <p className="text-sky-100 mb-12 text-sm leading-relaxed">
              Ready to start your project? Reach out for a structural assessment or a customized pool design quote.
            </p>
            
            <div className="space-y-6 text-sm text-white/90">
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

          {/* Right Side: The Form (White Background) */}
          <div className="p-12 md:w-3/5 bg-white"> 
            {status === "SUCCESS" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">✓</div>
                <h4 className="text-2xl font-bold text-gray-900">Message Sent!</h4>
                <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus("")} className="text-brand-primary font-bold text-sm underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Name</label>
                    <input name="name" required type="text" className="w-full p-3 bg-gray-50 border-b border-gray-200 outline-none focus:border-brand-primary transition-colors text-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full p-3 bg-gray-50 border-b border-gray-200 outline-none focus:border-brand-primary transition-colors text-gray-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Project Interest</label>
                  <select name="type" className="w-full p-3 bg-gray-50 border-b border-gray-200 outline-none focus:border-brand-primary transition-colors text-gray-500 appearance-none cursor-pointer">
                    <option>Select a service...</option>
                    <option>Swimming Pool Construction</option>
                    <option>Residential Building</option>
                    <option>Renovation/Maintenance</option>
                    <option>Structural Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Tell us about your challenge</label>
                  <textarea name="message" required rows="4" placeholder="Briefly describe the problem you want us to solve..." className="w-full p-3 bg-gray-50 border-b border-gray-200 outline-none focus:border-brand-primary transition-colors text-gray-900 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-primary hover:bg-sky-500 text-white font-bold tracking-[0.2em] text-xs transition-all shadow-lg hover:shadow-brand-primary/20 cursor-pointer">
                  SEND INQUIRY
                </button>
                {status === "ERROR" && <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;