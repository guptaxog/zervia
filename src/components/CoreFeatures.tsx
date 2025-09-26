import React from 'react';
import { Briefcase, Code2, Users, Award, ArrowRight } from 'lucide-react';

const CoreFeatures = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Four ways to level up
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're a coding newbie or already building side projects, 
            we've got something that'll push you forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 - Large card */}
          <div className="lg:row-span-2 bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-8 rounded-3xl border border-blue-600/30 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Early Internships</h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Forget waiting until final year. We place 1st and 2nd year students 
                in paid internships at fast-growing startups. Real work, real money, real experience.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-200">₹15k-40k monthly stipends</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-200">3-6 month programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-200">Direct founder mentorship</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 group">
                Browse internships
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Hackathons & Competitions</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Build real products in 48 hours. Win cash prizes, get noticed by startups, 
              and add impressive projects to your portfolio.
            </p>
            <div className="text-purple-400 font-semibold text-sm">
              Next event: Feb 15-17 →
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Startup Visits & Mentorship</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Go behind the scenes at successful startups. Meet founders, see how 
              decisions are made, and get career advice from people who've been there.
            </p>
            <div className="text-green-400 font-semibold text-sm">
              Monthly office visits →
            </div>
          </div>
        </div>
        
        {/* Bottom feature - Full width */}
        <div className="mt-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 p-8 rounded-3xl border border-orange-600/30 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">Industry Certifications</h3>
              <p className="text-orange-100 text-lg leading-relaxed">
                Get certified by Adobe, Google, and other tech giants. These aren't just certificates – 
                they're direct pathways to jobs at top companies.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-orange-200 text-sm">students certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;