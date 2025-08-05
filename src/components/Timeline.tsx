import React, { useState } from 'react';
import { Calendar, Video, FileText, Linkedin, Award, Users } from 'lucide-react';

export default function Timeline() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Weeks 1-6: Foundation & Skills",
      icon: <FileText size={24} />,
      color: "bg-blue-600",
      modules: [
        "Professional Communication",
        "Personal Branding & LinkedIn",
        "Digital Tools Mastery",
        "Career Planning & Strategy",
        "Interview Preparation",
        "Workplace Etiquette"
      ],
      deliverables: [
        "Video Elevator Pitch",
        "Updated Professional CV",
        "Optimized LinkedIn Profile",
        "Personal Brand Portfolio"
      ]
    },
    {
      title: "Weeks 7-12: Experience & Application",
      icon: <Users size={24} />,
      color: "bg-red-600",
      modules: [
        "Internship/Volunteering Placement",
        "One-on-One Coaching Sessions",
        "Capstone Project Development",
        "Executive Mentorship",
        "Real-world Problem Solving",
        "Graduation Preparation"
      ],
      deliverables: [
        "Completed Internship",
        "Capstone Project Presentation",
        "Final Professional Pitch",
        "License to Work™ Certificate"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Programme Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 6-month journey from academic knowledge to workplace excellence.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-xl p-2 shadow-lg">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? `${phase.color} text-white`
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {phase.icon}
                  <span className="hidden sm:inline">Phase {index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Content */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-3 ${phases[activePhase].color} text-white px-6 py-3 rounded-full mb-4`}>
              {phases[activePhase].icon}
              <h3 className="text-xl font-bold">
                {phases[activePhase].title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Modules */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-blue-600" size={24} />
                Learning Modules
              </h4>
              <div className="space-y-3">
                {phases[activePhase].modules.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="text-red-600" size={24} />
                Key Deliverables
              </h4>
              <div className="space-y-4">
                {phases[activePhase].deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border border-red-100">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between items-center">
              <div className="bg-blue-600 text-white p-4 rounded-full">
                <span className="font-bold">START</span>
              </div>
              <div className="bg-gray-300 text-gray-600 p-3 rounded-full">
                <span className="font-bold text-sm">WEEK 6</span>
              </div>
              <div className="bg-red-600 text-white p-4 rounded-full">
                <span className="font-bold">GRADUATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}