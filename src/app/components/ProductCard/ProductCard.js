"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { addItemToCart } from "@/app/lib/cartHelper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
  z-index: 100;
  margin: auto;
  text-align: center;
  width: 100%;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
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

const Description = styled.div`
  width: 300px;
  margin: 0.5rem auto auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  div a {
    transition: color 0.3s;
  }
  div a:hover {
    color: rgb(178 174 191);
  }
`;

export default function ProductCard({ item }) {
  const [active, setActive] = useState(-1);

  const handleAddToCart = (item, size) => {
    addItemToCart(item.id, 1, size);
  };

  const handleClick = (id, size) => {
    setActive(`${id}, ${size}`);
  };

  return (
    <div>
      <MediaWrapper>
        <Image src={item.mediaUrl} alt={item.altText} fill />
        <ContentWrapper>
          <Text>Select size</Text>
          <Sizes>
            {Object.entries(item.sizes).map(([size, stock]) => (
              <button
                key={`size-${item.id}-${size}`}
                onClick={() => handleClick(item.id, size)}
                disabled={stock <= 0}
                style={{
                  backgroundColor:
                    active === `${item.id}, ${size}`
                      ? "rgb(178, 174, 191)"
                      : "transparent",
                  color: active === `${item.id}, ${size}` ? "white" : null,
                }}
              >
                {size}
              </button>
            ))}
          </Sizes>
          <Button
            onClick={() => {
              const selectedSize = active.split(", ")[1];
              if (selectedSize) {
                handleAddToCart(item, selectedSize);
              }
            }}
            disabled={active === -1}
          >
            Add to cart
          </Button>
        </ContentWrapper>
      </MediaWrapper>
      <Description>
        <div>
          <a href="">{item.name}</a>
        </div>
        <div>{item.price}</div>
      </Description>
    </div>
  );
}
