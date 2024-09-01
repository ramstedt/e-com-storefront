"use client";
import styled from "styled-components";
import Image from "next/image";
import { addItemToCart } from "@/app/lib/cartHelper";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

export default function ProductCard({}) {
  const [selectedId, setSelectedId] = useState(null);
  const [active, setActive] = useState(-1);
  const data = {
    item1: {
      id: 1,
      mediaUrl: "/images/products/dress1.png",
      altText: "/images/products/dress1.png",
      sizes: { xs: 2, s: 1, m: 5, l: 0, xl: 0 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item2: {
      id: 2,
      mediaUrl: "/images/products/dress2.png",
      altText: "/images/products/dress2.png",
      sizes: { xs: 2, s: 1, m: 5, l: 1, xl: 0 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item3: {
      id: 3,
      mediaUrl: "/images/products/dress3.png",
      altText: "/images/products/dress3.png",
      sizes: { xs: 2, s: 1, m: 5, l: 8, xl: 7 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item4: {
      id: 4,
      mediaUrl: "/images/products/dress4.png",
      altText: "/images/products/dress4.png",
      sizes: { xs: 0, s: 0, m: 5, l: 0, xl: 0 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item5: {
      id: 5,
      mediaUrl: "/images/products/dress5.png",
      altText: "/images/products/dress5.png",
      sizes: { xs: 0, s: 1, m: 5, l: 7, xl: 6 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item6: {
      id: 6,
      mediaUrl: "/images/products/sweater1.png",
      altText: "/images/products/sweater1.png",
      sizes: { xs: 2, s: 0, m: 5, l: 0, xl: 7 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item7: {
      id: 7,
      mediaUrl: "/images/products/sweater2.png",
      altText: "/images/products/sweater2.png",
      sizes: { xs: 2, s: 1, m: 5, l: 0, xl: 0 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
    item8: {
      id: 8,
      mediaUrl: "/images/products/sweater3.png",
      altText: "/images/products/sweater3.png",
      sizes: { xs: 2, s: 1, m: 0, l: 9, xl: 0 },
      name: "Product Name",
      description: "lorem ipsum",
      shortDescription: "lorem",
      price: "£200",
    },
  };

  const handleAddToCart = (item) => {
    const storedData = localStorage.getItem("selectedSize");
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
        <div key={`product ${item.id}, ${key}`}>
          <MediaWrapper>
            <Image src={item.mediaUrl} alt="alt text" fill />
            <ContentWrapper>
              <Text>Select size</Text>
              <Sizes>
                {Object.entries(item.sizes).map(([id, stock]) => (
                  <button
                    key={` size ${item.id}, ${id}`}
                    onClick={() => handleClick(item.id, id)}
                    disabled={stock <= 0}
                    style={{
                      backgroundColor:
                        active === `${item.id}, ${id}`
                          ? "rgb(178 174 191)"
                          : "transparent",
                      color: active === `${item.id}, ${id}` ? "white" : null,
                    }}
                  >
                    {id}
                  </button>
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
          <Description>
            <div>
              <a href="">{item.name}</a>
            </div>
            <div>{item.price}</div>
          </Description>
        </div>
      ))}
    </Wrapper>
  );
}
