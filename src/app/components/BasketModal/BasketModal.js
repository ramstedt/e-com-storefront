import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { removeItemFromCart } from "@/app/lib/cartHelper";

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

export default function BasketModal({ cartItems }) {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (event, itemId, size) => {
    event.preventDefault();
    removeItemFromCart(itemId, size);
  };

  return (
    <Wrapper>
      <hr />
      <h2>Your shopping bag</h2>
      <hr />
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <ItemWrapper key={index}>
              <ImageWrapper>
                <Image
                  src={item.mediaUrl}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </ImageWrapper>
              <DetailsWrapper>
                <div>
                  <div>{item.name}</div>
                  <div>£{item.price}</div>
                </div>
                <div>
                  <div>Size: {item.size}</div>
                  <div>Quantity: {item.quantity}</div>
                </div>
                <Link
                  href="/"
                  onClick={(event) => handleRemove(event, item.id, item.size)}
                >
                  Remove
                </Link>
              </DetailsWrapper>
            </ItemWrapper>
          ))}

          <Subtotal>
            <div>Subtotal</div>
            <div>£{subtotal}</div>
          </Subtotal>
          <PaymentLink href="/checkout">Proceed to checkout</PaymentLink>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Wrapper>
  );
}
