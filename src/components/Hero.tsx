import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Unique asymmetrical background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl font-bold text-white">
          Zervia
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Universities</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Students</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-600/30">
              <Sparkles className="w-4 h-4" />
              Now partnering with 200+ universities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Where students meet
              <span className="block text-blue-400">real startups</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Skip the theory. Get hands-on with actual startups through hackathons, 
              early internships, and mentorship programs designed for ambitious students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-600/25">
                Find opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 transition-all duration-200 flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                See how it works
              </button>
            </div>
            
            {/* Social proof */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm mb-4">Trusted by students at</p>
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                <span>IIT Delhi</span>
                <span>BITS Pilani</span>
                <span>VIT</span>
                <span>NIT Trichy</span>
                <span>IIIT Hyderabad</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">Z</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">New opportunity available</p>
                      <p className="text-gray-400 text-sm">Frontend Intern at TechCorp</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-300 text-sm mb-2">📍 Remote • 💰 ₹25k/month • ⏰ 3 months</p>
                    <p className="text-white">Looking for a React developer to join our early-stage fintech startup...</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Apply now
                    </button>
                    <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-500 transition-colors">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                New!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                🎯 95% match
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;