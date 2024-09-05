"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-transform: uppercase;
  }
  hr {
    width: 100%;
    background-color: lightgrey;
    height: 1px;
    border: 0;
  }

  a {
    text-transform: uppercase;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  position: relative;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div:first-of-type {
    text-transform: uppercase;
    div:last-of-type {
      font-weight: 600;
    }
  }

  a {
    text-decoration: underline;
    font-size: 0.625rem;
    font-weight: 600;
  }
`;

const Subtotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PaymentLink = styled(Link)`
  background: black;
  color: white;
  padding: 0.7rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid black;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

export default function BasketModal({}) {
  return (
    <Wrapper>
      <hr />
      <h2>Your shopping bag</h2>
      <hr />
      <ItemWrapper>
        <ImageWrapper>
          <Image src="/images/products/dress1.png" alt="hej" fill />
        </ImageWrapper>
        <DetailsWrapper>
          <div>
            <div>Item name</div>
            <div>£350</div>
          </div>
          <div>
            <div>Size: M</div>
            <div>Quantity: 1</div>
          </div>
          <Link href="/">Remove</Link>
        </DetailsWrapper>
      </ItemWrapper>
      <Subtotal>
        <div>Subtotal</div>
        <div>£800</div>
      </Subtotal>
      <PaymentLink href="">proceed to checkout</PaymentLink>
    </Wrapper>
  );
}
