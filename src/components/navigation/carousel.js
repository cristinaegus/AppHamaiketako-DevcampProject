import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const timer = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const goPrev = () => {
    let index = activeIndex - 1;
    if (index < 0) {
      index = items.length - 1;
    }
    setActiveIndex(index);
  };

  return (
    <div className="carousel" role="region" aria-label="Image Carousel">
      <button 
        onClick={goPrev}
        className="carousel-button prev"
        aria-label="Previous Image"
      >
        &#8249;
      </button>
      
      <div className="carousel-item">
        {items[activeIndex]}
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={goNext}
        className="carousel-button next"
        aria-label="Next Image"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;