// components/HeroSection/index.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex items-center justify-between bg-gradient-to-r from-indigo-500 to-blue-400 h-screen w-full">
      <div className="absolute inset-0">
        {/* Hero Image */}
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center px-8 py-12 max-w-5xl w-full text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome To CRC
        </h1>
        <p className="text-lg mb-6">
          At our Complaints Cell, we are dedicated to addressing your concerns with utmost priority and care. Share your feedback with us and help us enhance our services. We are here to listen, resolve, and support you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
