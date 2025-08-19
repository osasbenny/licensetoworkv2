import React from 'react';

export default function Partners() {
  const partners = [
    { name: "NYSC", logo: "/NYSC.jpeg" },
    { name: "NECA", logo: "/NECA.jpeg" },
    { name: "ITF", logo: "/ITF.jpeg" },
    { name: "MTN Foundation", logo: "/MTN-Foundation.jpeg" },
    { name: "British Council", logo: "/British0-Council.jpeg" },
    { name: "UN-SDG 8", logo: "/UN-SDG.jpeg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Strategic Partners
          </h2>
          <p className="text-lg text-gray-600">
            Collaborating with leading organizations to deliver exceptional opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <div className="text-sm font-semibold text-gray-700 text-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Join our network of over <span className="font-bold text-blue-600">100+ partner organizations</span> 
            committed to developing Nigeria's workforce
          </p>
        </div>
      </div>
    </section>
  );
}