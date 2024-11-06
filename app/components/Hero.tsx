import Image from "next/image";
import { useState } from "react";

export const Hero = () => {
  const images = ["/landing0.jpg", "/landing1.jpg", "/landing2.jpg"];
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="wcp flex justify-center mx-4 text-2xl sm:text-4xl md:text-6xl lg:text-9xl mt-8">
        Wedding Clicks Photography
      </div>
      <div className="services-container overflow-hidden relative mx-4 md:mx-8 my-10 md:my-20">
        <div className="services animate-marquee border-2 p-2 border-black flex gap-4 text-xs sm:text-sm md:text-base">
        <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div>
          <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div> <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div>
          <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div> <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div>
          <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div> <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div>
          <div>Wedding shoot</div>
          <div className="font-extrabold">Candid photography</div>
          <div>Engagement shoot</div>
          <div className="font-extrabold">Cinematography</div>
          <div>Baby shoot</div>
          <div className="font-extrabold">Newborn shoot</div>
          <div>Event photography</div>
          <div className="font-extrabold">Documentary</div>
        </div>
      </div>

      {/* Previous Image Button */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-6 md:left-10 lg:left-20 cursor-pointer"
        onClick={handlePrevImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <div className="flex justify-center">
        <Image
          src={images[imageIndex]}
          alt="landing"
          width={1600}
          height={100}
          className="rounded-2xl w-full max-w-screen-lg mx-auto"
        />
      </div>

      {/* Next Image Button */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-6 md:right-10 lg:right-20 cursor-pointer"
        onClick={handleNextImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
