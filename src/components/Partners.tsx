import React from 'react';

export default function Partners() {
  const partners = [
    { name: "NYSC", logo: "🏛️" },
    { name: "NECA", logo: "🏢" },
    { name: "ITF", logo: "🎓" },
    { name: "MTN Foundation", logo: "📱" },
    { name: "British Council", logo: "🇬🇧" },
    { name: "UN-SDG 8", logo: "🌍" }
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
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
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