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
    <div className="relative mx-auto w-full max-w-md aspect-[4/5] overflow-hidden" style={{ minHeight: 220 }}>
      <img
        key={images[prevIndex] + "-prev"}
        src={images[prevIndex]}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out z-10 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        style={{ transition: "opacity 0.7s" }}
      />
      <img
        key={images[index] + "-current"}
        src={images[index]}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out z-20 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.7s" }}
      />
    </div>
  );
} 
