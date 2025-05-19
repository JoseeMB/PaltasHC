import { useEffect, useState } from 'react';

export default function Carousel({ images, direction = 'horizontal', timeout=3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isVertical = direction === 'vertical';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, timeout);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`${isVertical ? 'h-[40em]' : 'h-64 sm:h-full'} overflow-hidden relative rounded-lg`}>
      <div
        className={`flex transition-transform duration-700 ease-in-out h-full ${
          isVertical ? 'flex-col' : ''
        }`}
        style={{
          transform: isVertical
            ? `translateY(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className={`w-full flex-shrink-0 object-contain ${isVertical ? 'h-full' : 'h-full'}`}
          />
        ))}
      </div>
    </section>
  );
}
