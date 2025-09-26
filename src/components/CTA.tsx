import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Compelling copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-600/30 mb-6">
                <Sparkles className="w-4 h-4" />
                Free for universities (limited time)
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to give your students an
                <span className="text-blue-400"> unfair advantage?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join 200+ universities already using Zervia to boost their placement stats 
                and give students real-world experience from day one.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Setup takes less than 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated success manager included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">See results within first month</span>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <p className="text-gray-400 text-sm mb-2">What universities are saying:</p>
                <p className="text-white font-medium">
                  "Our placement rate increased by 40% in the first year. Students are getting 
                  offers before they even graduate."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Dr. Rajesh Kumar, Dean of Placements, VIT</p>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div>
              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Start your partnership</h3>
                <p className="text-gray-400 mb-8">Get a custom demo for your university</p>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">We'll be in touch!</h4>
                    <p className="text-gray-400">Expect a call within 24 hours to schedule your demo.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="university"
                        placeholder="University name"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-600/25"
                    >
                      Get your demo
                      <Send className="w-5 h-5" />
                    </button>
                    
                    <p className="text-gray-500 text-sm text-center">
                      No spam, just a quick call to understand your needs
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;