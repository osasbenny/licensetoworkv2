import React, { useState } from 'react';
import { CheckCircle, User, MapPin, HandHeart, Briefcase } from 'lucide-react';

export default function Pillars() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      icon: <CheckCircle size={48} />,
      title: "Preparedness",
      description: "Building foundational skills and knowledge for workplace success.",
      details: "Develop essential workplace competencies, technical skills, and professional knowledge base."
    },
    {
      icon: <User size={48} />,
      title: "Professionalism",
      description: "Cultivating professional behaviors, ethics, and workplace etiquette.",
      details: "Master professional communication, workplace ethics, and business etiquette standards."
    },
    {
      icon: <MapPin size={48} />,
      title: "Positioning",
      description: "Strategic personal branding and career positioning for market advantage.",
      details: "Create compelling personal brand, optimize LinkedIn presence, and develop networking skills."
    },
    {
      icon: <HandHeart size={48} />,
      title: "Practice",
      description: "Real-world application through internships and practical experiences.",
      details: "Gain hands-on experience through internships, projects, and real workplace scenarios."
    },
    {
      icon: <Briefcase size={48} />,
      title: "Placement",
      description: "Connecting graduates with career opportunities and employer networks.",
      details: "Access exclusive job opportunities, career fairs, and direct employer connections."
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The 5 Pillars of Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach is built on five foundational pillars that ensure 
            your transformation from graduate to workplace-ready professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredPillar(index)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full border-2 border-transparent hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <div className="text-blue-900 mb-4 flex justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Hover tooltip */}
              {hoveredPillar === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-blue-900 text-white p-4 rounded-lg shadow-xl z-10 w-64">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rotate-45"></div>
                  <p className="text-sm leading-relaxed">
                    {pillar.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 px-6 py-3 rounded-full">
            <span className="text-red-600 font-semibold">
              License To Work<span className="text-red-600">™</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-700">Complete Transformation Journey</span>
          </div>
        </div>
      </div>
    </section>
  );
}