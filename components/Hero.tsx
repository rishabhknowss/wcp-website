import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Hero = () => {
    const images = [
        '/landing0.jpg',
        '/landing1.jpg',
        '/landing2.jpg',
        '/landing0.jpg',
      ]
    
      const [currentIndex, setCurrentIndex] = useState(0)
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide()
        }, 3000)
    
        return () => clearInterval(interval)
      }, [])
  return (
    <div className="relative">
      <div className="wcp flex justify-center mx-4 text-2xl sm:text-4xl md:text-6xl lg:text-9xl mt-8">
        Wedding Clicks Photography
      </div>
      
      <div className="services-container overflow-hidden relative mx-4 md:mx-8 my-10 md:my-20">
        <div className="services animate-marquee border-2 p-2 border-black flex gap-4 text-xs sm:text-sm md:text-base">
          {/* Content */}
          {["Wedding shoot", "Candid photography", "Engagement shoot", "Cinematography", "Baby shoot", "Newborn shoot", "Event photography", "Documentary"].map((service, index) => (
            <div key={index} className={index % 2 === 0 ? "" : "font-extrabold"}>{service}</div>
          ))}{["Wedding shoot", "Candid photography", "Engagement shoot", "Cinematography", "Baby shoot", "Newborn shoot", "Event photography", "Documentary"].map((service, index) => (
            <div key={index} className={index % 2 === 0 ? "" : "font-extrabold"}>{service}</div>
          ))}{["Wedding shoot", "Candid photography", "Engagement shoot", "Cinematography", "Baby shoot", "Newborn shoot", "Event photography", "Documentary"].map((service, index) => (
            <div key={index} className={index % 2 === 0 ? "" : "font-extrabold"}>{service}</div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={600}
              className="w-full h-auto flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

    </div>
  );
};
