'use client';
import { useState, useEffect } from 'react';

export default function SizeButton({ sizes }) {
  const [active, setActive] = useState(-1);

  // Initialize selectedSize with the value from local storage or undefined
  const [selectedSize, setSelectedSize] = useState(() => {
    const storedSize = localStorage.getItem('selectedSize');
    return storedSize ? JSON.parse(storedSize) : undefined;
  });

  useEffect(() => {
    // Update local storage whenever selectedSize changes
    localStorage.setItem('selectedSize', JSON.stringify(selectedSize));
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
