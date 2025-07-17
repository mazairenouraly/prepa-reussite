import React, { useEffect, useState } from "react";

const images = [
  "/1.jpeg",
  "/2.jpeg"
];

export default function ImageSwitcher() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setPrevIndex(index);
        setIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 700); // durée du crossfade
    }, 2200);
    return () => clearTimeout(fadeTimeout);
  }, [index]);

  return (
    <div
      className="w-full max-w-md mx-auto aspect-[4/5] flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 via-white to-rose-50 relative overflow-hidden"
      style={{ minHeight: 320 }}
    >
      {/* Image précédente (sortante) */}
      <img
        key={images[prevIndex] + "-prev"}
        src={images[prevIndex]}
        alt=""
        className={`max-h-full max-w-full object-contain absolute top-1/2 left-1/2 rounded-xl shadow bg-transparent -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out z-10 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        style={{ transition: "opacity 0.7s" }}
      />
      {/* Image actuelle (entrante) */}
      <img
        key={images[index] + "-current"}
        src={images[index]}
        alt=""
        className={`max-h-full max-w-full object-contain absolute top-1/2 left-1/2 rounded-xl shadow bg-transparent -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out z-20 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.7s" }}
      />
    </div>
  );
} 