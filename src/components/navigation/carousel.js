import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [items]);

  const goNext = () => {
    if (items && items.length > 0) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  };

  const goPrev = () => {
    if (items && items.length > 0) {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }
  };

  if (!items || items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        Cargando imágenes del carousel...
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <button 
        onClick={goPrev}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ‹
      </button>
      
      <div style={{
        flex: 1,
        textAlign: 'center'
      }}>
        {items[activeIndex]}
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '15px'
        }}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === activeIndex ? '#007bff' : '#ccc',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={goNext}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;