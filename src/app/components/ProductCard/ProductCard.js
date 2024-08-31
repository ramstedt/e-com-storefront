'use client';
import styled from 'styled-components';
import Image from 'next/image';
import SizeButtons from '../_Molecules/SizeButtons/SizeButtons';
import { addItemToCart } from '@/app/lib/cartHelper';

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
    // Assuming the product ID is the same as the item ID
    addItemToCart(item.id, 1);
  };

  return (
    <Wrapper>
      {Object.entries(data).map(([key, item]) => (
        <>
          {console.log(item.id)}
          <MediaWrapper key={key + item.id}>
            <Image src={item.mediaUrl} alt='' fill />
            <ContentWrapper>
              <Text>Select size</Text>
              <Sizes>
                <SizeButtons sizes={item.sizes} />
              </Sizes>
              <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
            </ContentWrapper>
          </MediaWrapper>
        </>
      ))}
    </Wrapper>
  );
}
