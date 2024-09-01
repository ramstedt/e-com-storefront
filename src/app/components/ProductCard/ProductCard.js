'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { addItemToCart } from '@/app/lib/cartHelper';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentWrapper = styled.div`
  top: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  z-index: 700;
  margin: auto;
  text-align: center;
  width: 100%;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: 768px) {
  }
`;
const Button = styled.button`
  width: 100%;
  background: rgba(255 255 255 0.5);
  text-transform: uppercase;
  padding: 10px 0 10px 0;
  transition: 0.3s;
  background: rgb(178 174 191);

  &:hover {
    background: rgb(201 195 219);
  }
`;

const Sizes = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: space-evenly;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);

  button {
    cursor: pointer;
    text-transform: uppercase;
    width: 50px;
    padding: 15px;
    background: red;
    margin: 1rem 0 1rem 0;
    &:hover {
      background: rgb(178, 174, 191);
    }
    &:disabled,
    &[disabled] {
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='black' stroke-width='1'/><path d='M0 0 L100 100 ' stroke='black' stroke-width='1'/></svg>");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%, auto;
    }
  }
`;

const Text = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding-top: 1rem;
`;

const MediaWrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover ${ContentWrapper} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  img {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 400px;
  }
`;

export default function ProductCard({}) {
  const [selectedId, setSelectedId] = useState(null);
  const [active, setActive] = useState(-1);
  const data = {
    item1: {
      id: 1,
      mediaUrl: '/images/stock4.jpg',
      altText: '/images/stock4.jpg',
      sizes: { xs: 2, s: 1, m: 5, l: 0, xl: 0 },
    },
    item2: {
      id: 2,
      mediaUrl: '/images/stock3.jpg',
      altText: '/images/stock3.jpg',
      sizes: { xs: 2, s: 1, m: 5, l: 0, xl: 0 },
    },
  };

  const handleAddToCart = (item) => {
    const storedData = localStorage.getItem('selectedSize');
    const storedId = storedData ? JSON.parse(storedData).id : null;

    if (storedId === item.id) {
      addItemToCart(item.id, 1);
    }
  };

  const handleClick = (id, size) => {
    setActive(`${id}, ${size}`);
    setSelectedId(id);
  };

  return (
    <Wrapper>
      {Object.entries(data).map(([key, item]) => (
        <>
          <MediaWrapper key={key + item.id}>
            <Image src={item.mediaUrl} alt='' fill />
            <ContentWrapper>
              <Text>Select size</Text>
              <Sizes>
                {Object.entries(item.sizes).map(([id, stock]) => (
                  <>
                    <button
                      key={id}
                      onClick={() => handleClick(item.id, id)}
                      disabled={stock <= 0}
                      style={{
                        backgroundColor:
                          active === `${item.id}, ${id}`
                            ? 'rgb(178 174 191)'
                            : 'transparent',
                        color: active === `${item.id}, ${id}` ? 'white' : null,
                      }}
                    >
                      {id}
                    </button>
                  </>
                ))}
              </Sizes>
              <Button
                onClick={() => handleAddToCart(item)}
                disabled={item.id !== selectedId}
              >
                Add to cart
              </Button>
            </ContentWrapper>
          </MediaWrapper>
        </>
      ))}
    </Wrapper>
  );
}
