'use client';
import { useState, useEffect } from 'react';

export default function SizeButtons({ sizes }) {
  const [active, setActive] = useState(-1);

  const [selectedSize, setSelectedSize] = useState(() => {
    const storedSize = localStorage.getItem('selectedSize');
    return storedSize || undefined;
  });

  useEffect(() => {
    if (selectedSize !== undefined) {
      localStorage.setItem('selectedSize', selectedSize);
    }
  }, [selectedSize]);

  const handleClick = (i) => {
    setActive(i);
    setSelectedSize(i);
  };

  return (
    <>
      {Object.entries(sizes).map(([key, size]) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          style={{
            backgroundColor:
              active === key ? 'rgb(178 174 191)' : 'transparent',
            color: active === key ? 'white' : 'black',
          }}
          size={size}
        >
          {key}
        </button>
      ))}
    </>
  );
}
