// import React from 'react';

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/djfnmztu9/image/upload/v1733632530/hero-image_hznbgm.jpg"
          alt="Egg Incubator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Empowering Poultry Farmers with Innovation, Quality,<br />and Reliability
</h1>
<p className="text-xl md:text-2xl mb-8">
Hatch More. Grow More
</p>

          <a
            href="#products"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
}