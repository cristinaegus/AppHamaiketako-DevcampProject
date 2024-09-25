import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="carousel">
      <button onClick={goPrev}>Prev</button>
      <div className="carousel-item">
        {items[activeIndex]}
      </div>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default Carousel;