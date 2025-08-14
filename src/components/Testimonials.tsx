import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adaora Okafor",
      role: "Software Developer at TechHub",
      image: "👩🏾‍💻",
      quote: "License To Work™ transformed my career trajectory. The practical skills and professional network I gained were invaluable. I landed my dream job within 2 months of graduation!",
      rating: 5
    },
    {
      name: "Emeka Nwosu",
      role: "Business Analyst at FinTech Solutions",
      image: "👨🏾‍💼",
      quote: "The programme didn't just teach me technical skills - it taught me how to think and act like a professional. The mentorship and coaching made all the difference.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "HR Manager at Global Corp",
      image: "👩🏽‍💼",
      quote: "As an employer, I can confidently say that License To Work™ graduates stand out. They come prepared, professional, and ready to contribute from day one.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates and partner employers about the transformative 
            impact of License To Work<span className="text-red-600">™</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of the next generation of workplace-ready professionals. 
              Your success story starts with License To Work<span className="text-red-400">™</span>.
            </p>
            <a href="#apply" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}