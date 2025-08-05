import React from 'react';
import { Building, Crown, Presentation, Users, Award, Network } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Building size={32} />,
      title: "Internship Placements with Partner Companies",
      description: "Gain real-world experience with our network of industry-leading companies and organizations.",
      highlight: "50+ Partner Companies"
    },
    {
      icon: <Crown size={32} />,
      title: "Day with an Executive",
      description: "Shadow senior executives and learn directly from industry leaders about strategic thinking and leadership.",
      highlight: "C-Suite Access"
    },
    {
      icon: <Presentation size={32} />,
      title: "Capstone Project & Graduation Showcase",
      description: "Present your final project to industry professionals and potential employers at our signature showcase event.",
      highlight: "Industry Audience"
    },
    {
      icon: <Users size={32} />,
      title: "Mentorship & Coaching",
      description: "Receive personalized guidance from experienced professionals throughout your journey.",
      highlight: "1:1 Support"
    },
    {
      icon: <Award size={32} />,
      title: "Professional Certification",
      description: "Earn your License to Work™ certificate, recognized by employers across multiple industries.",
      highlight: "Industry Recognized"
    },
    {
      icon: <Network size={32} />,
      title: "Access to Employer Network",
      description: "Connect directly with hiring managers and recruiters from our extensive employer network.",
      highlight: "Direct Access"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Programme Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support and exclusive opportunities designed to accelerate your career success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-blue-900 group-hover:text-blue-600 transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-semibold">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Why Choose License To Work<span className="text-red-400">™</span>?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              We don't just prepare you for a job – we prepare you for a career. Our holistic approach 
              ensures you develop not just technical skills, but the professional mindset and network 
              needed for long-term success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-blue-200">Practical Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">6</div>
                <div className="text-blue-200">Months Intensive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">∞</div>
                <div className="text-blue-200">Lifetime Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}