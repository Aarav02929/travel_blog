"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/banglore.jpg", name: "Bangalore, India" },
  { src: "/ireland.jpg", name: "Ireland" },
  { src: "/thailandpic.jpg", name: "Thailand" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
              {image.name}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-10 bg-white/50 p-2 rounded-full text-white cursor-pointer"
      >
        →
      </button>
    </div>
  );
}
