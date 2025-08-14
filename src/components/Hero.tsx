import React from 'react';
import { ArrowRight, Users, Target, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Gateway from <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Graduate</span> to <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Great Hire</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            A transformational 6-month hybrid programme that bridges the gap between academic knowledge and workplace readiness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#apply" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 group"
            >
              Apply Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="text-blue-200" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-blue-200">Graduates Placed</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Target className="text-blue-200" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">6 Months</div>
              <div className="text-blue-200">Programme Duration</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Award className="text-blue-200" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}