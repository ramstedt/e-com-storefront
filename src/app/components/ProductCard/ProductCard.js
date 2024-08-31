"use client";
import styled from "styled-components";
import Image from "next/image";

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
  background: #ffffff;
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
  background: white;

  div {
    width: 20px;
    padding: 15px;
    background: white;
    cursor: pointer;
    margin: 1rem 0 1rem 0;
    &:hover {
      background: rgb(178 174 191);
    }
  }
`;

const Text = styled.div`
  background: white;
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
    item1: { mediaUrl: "/images/stock4.jpg", altText: "/images/stock4.jpg" },
    item2: { mediaUrl: "/images/stock3.jpg", altText: "/images/stock3.jpg" },
  };

  return (
    <Wrapper>
      {Object.entries(data).map(([key, item]) => (
        <>
          <MediaWrapper>
            <Image key={key} src={item.mediaUrl} alt="" fill />
            <ContentWrapper>
              <Text>Select size</Text>
              <Sizes>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </Sizes>
              <Button>Add to cart</Button>
            </ContentWrapper>
          </MediaWrapper>
        </>
      ))}
    </Wrapper>
  );
}
