import React from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Arjun Mehta",
      role: "2nd year, Computer Science",
      university: "VIT Vellore",
      story: "Got my first internship through Zervia in my second year. Now I'm a full-time SDE at the same startup with a ₹12L package. My friends are still figuring out what to do after graduation.",
      outcome: "₹12L starting salary",
      image: "👨‍💻"
    },
    {
      name: "Priya Sharma",
      role: "3rd year, Electronics",
      university: "BITS Pilani",
      story: "Started with a hackathon, won ₹50k, got noticed by three startups. Now I'm building my own fintech startup with two co-founders I met through Zervia.",
      outcome: "Founded startup",
      image: "👩‍💼"
    },
    {
      name: "Rahul Singh",
      role: "Final year, Mechanical",
      university: "IIT Delhi",
      story: "Thought mechanical engineers couldn't get into tech. Zervia proved me wrong. Did a product management internship, now I'm a PM at a unicorn startup.",
      outcome: "PM at unicorn",
      image: "🚀"
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real students, real results
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These aren't cherry-picked success stories. This is what happens when 
            ambitious students get real opportunities early.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{story.image}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{story.name}</h3>
                      <p className="text-gray-400 text-sm">{story.role}</p>
                      <p className="text-blue-400 text-sm">{story.university}</p>
                    </div>
                  </div>
                  
                  <Quote className="w-6 h-6 text-blue-400 mb-4" />
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{story.story}"
                  </p>
                  
                  <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {story.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12 rounded-3xl border border-blue-600/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5,200+</div>
              <div className="text-gray-400">Students placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">₹8.5L</div>
              <div className="text-gray-400">Avg. starting salary</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <div className="text-gray-400">Get full-time offers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Partner startups</div>
            </div>
          </div>
        </div>
        
        {/* Company logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Our students work at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Razorpay', 'Swiggy', 'CRED', 'Zerodha', 'Paytm', 'Flipkart'].map((company, index) => (
              <div key={index} className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;