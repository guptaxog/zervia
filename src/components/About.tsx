import React from 'react';
import { Users, Zap, Building2, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              We're fixing the 
              <span className="text-blue-400"> internship problem</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Most students wait until their final year to get real work experience. 
              That's too late. We connect first and second-year students directly 
              with startups that need fresh talent.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">No more unpaid "internships" that are just coffee runs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Real projects with real impact from day one</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Direct mentorship from startup founders</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-600/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">2.3x</div>
                  <div className="text-gray-400 text-sm">faster job placement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">₹8.5L</div>
                  <div className="text-gray-400 text-sm">avg starting salary</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">89%</div>
                  <div className="text-gray-400 text-sm">get full-time offers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                  <div className="text-gray-400 text-sm">student rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For Students</h3>
              <p className="text-gray-400 leading-relaxed">
                Skip the queue. Get real startup experience while your peers are still figuring out their majors.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For Universities</h3>
              <p className="text-gray-400 leading-relaxed">
                Boost your placement stats and reputation. Your students get jobs, you get recognition.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For Startups</h3>
              <p className="text-gray-400 leading-relaxed">
                Find hungry, talented students before they get expensive. Train them your way from the start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;