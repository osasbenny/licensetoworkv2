import React from 'react';
import { GraduationCap, Briefcase, Users, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <GraduationCap size={32} />,
      title: "For Fresh Graduates",
      description: "Designed specifically for recent graduates and early-career professionals with 0-3 years of experience."
    },
    {
      icon: <Briefcase size={32} />,
      title: "6-Month Programme",
      description: "3 months of intensive virtual/in-person training followed by 3 months of practical internship experience."
    },
    {
      icon: <Users size={32} />,
      title: "Real-World Skills",
      description: "Develop workplace skills, professional mindset, and gain hands-on experience with industry partners."
    },
    {
      icon: <Award size={32} />,
      title: "Career Certification",
      description: "Graduate with a prestigious License to Work™ certificate and showcase your achievements at our career fair."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About the Programme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            License To Work<span className="text-red-600">™</span> is a comprehensive career readiness programme 
            that transforms fresh graduates into workplace-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-blue-900 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Bridge the Gap Between Education and Employment
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Our programme addresses the critical skills gap that exists between academic learning 
                and workplace requirements, ensuring our graduates are not just qualified, but truly ready to excel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">85%</div>
                <div className="text-blue-200">Minimum Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-blue-200">Hands-on Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24</div>
                <div className="text-blue-200">Weeks Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">1:1</div>
                <div className="text-blue-200">Mentorship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}