import React from 'react';
import { TrendingUp, Users, Target, DollarSign, Clock, Star } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <Users size={24} />,
      title: "Work-Ready Talent",
      description: "Graduates with strong professional behaviors and workplace competencies"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Enhanced Productivity",
      description: "Immediate contribution to employer goals with reduced learning curve"
    },
    {
      icon: <Target size={24} />,
      title: "Pre-Screened Candidates",
      description: "Access to high-potential graduates who have proven their commitment"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Reduced Hiring Costs",
      description: "Lower recruitment and onboarding expenses with higher retention rates"
    },
    {
      icon: <Clock size={24} />,
      title: "Faster Integration",
      description: "Quick adaptation to company culture and immediate productivity"
    },
    {
      icon: <Star size={24} />,
      title: "Quality Assurance",
      description: "Certified professionals who meet industry standards and expectations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Graduate Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates deliver exceptional value to employers from day one, creating 
            win-win outcomes for both professionals and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 hover:border-l-8 hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {outcome.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Programme Impact
            </h3>
            <p className="text-lg text-gray-600">
              Real results that matter to graduates and employers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-gray-600 font-medium">Employment Placement</div>
              <div className="text-sm text-gray-500 mt-1">1-month post graduation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">75%</div>
              <div className="text-gray-600 font-medium">Faster Career Progression</div>
              <div className="text-sm text-gray-500 mt-1">with Enhanced Compensation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Graduates</div>
              <div className="text-sm text-gray-500 mt-1">Successfully placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">80%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              <div className="text-sm text-gray-500 mt-1">by Employers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}