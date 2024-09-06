import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  padding: 1rem;
  //display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(100% - 2rem);

  h2 {
    text-transform: uppercase;
    text-align: center;
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
  height: 100px;
  width: 100px;
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
  margin: 1rem 0 1rem 0;
`;

const PaymentLink = styled(Link)`
  display: flex;
  background: black;
  color: white;
  padding: 0.7rem;
  width: calc(100% - 2rem);
  justify-content: center;
  border: 1px solid black;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

export default function BasketModal({
  itemName,
  price,
  size,
  quantity,
  subtotal,
}) {
  return (
    <Wrapper>
      <hr />
      <h2>Your shopping bag</h2>
      <hr />
      <ItemWrapper>
        <ImageWrapper>
          <Image
            src="/images/products/dress1.png"
            alt="Item"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </ImageWrapper>
        <DetailsWrapper>
          <div>
            <div>{itemName}</div>
            <div>£{price}</div>
          </div>
          <div>
            <div>Size: {size}</div>
            <div>Quantity: {quantity}</div>
          </div>
          <Link href="/">Remove</Link>
        </DetailsWrapper>
      </ItemWrapper>
      <Subtotal>
        <div>Subtotal</div>
        <div>£{subtotal}</div>
      </Subtotal>
      <PaymentLink href="/checkout">proceed to checkout</PaymentLink>
    </Wrapper>
  );
}
