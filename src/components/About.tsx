// import React from 'react';
import ceoPortrait from '../img/ceo.png';


export function AboutCEO() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ceoPortrait}
              alt="CEO Portrait"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Meet Our Innovator</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Eggcelent Hatcheries</h3>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in technology innovation, Sarah has led our company
              to the forefront of the tech industry. Her vision for sustainable and accessible
              technology has shaped our product development and company culture.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
              "Innovation isn't just about creating new technology; it's about making technology
              that genuinely improves people's lives."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}