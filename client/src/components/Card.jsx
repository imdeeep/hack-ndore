'use client'
import { useState, useEffect } from 'react';

const slides = [
  { text: 'Efficient Asset Management', img: 'https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { text: 'Real-Time Tracking', img: 'https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { text: 'Predictive Maintenance', img: 'https://images.unsplash.com/photo-1711223507491-08a2cae466cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96">
      <img
        src={slides[currentSlide].img}
        alt={slides[currentSlide].text}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{slides[currentSlide].text}</h1>
      </div>
    </div>
  );
};

export default Hero;
