"use client";
import { useEffect, useState } from "react";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg", 
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* NAME OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-xl">
          डॉ. सचिन पाल <br />          
        </h1>
      </div>
    </section>
  );
}