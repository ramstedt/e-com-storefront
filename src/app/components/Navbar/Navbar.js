"use client";
import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import BasketModal from "../BasketModal/BasketModal";
import { useState } from "react";
import { Quicksand } from "next/font/google";
import styled from "styled-components";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.4rem 0 0.4rem;
`;

const Logo = styled(Link)`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  width: 100%;
  background: white;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

const BasketWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    ${ModalWrapper} {
      display: block;
    }
  }
`;
export default function Navbar({
  logo,
  itemName,
  price,
  size,
  quantity,
  subtotal,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  const handleBagClick = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <Nav>
      <Logo href="/" className={quicksand.className}>
        <Image src={logo} height="40" width="40" alt="logo" />
        Loom
      </Logo>
      <NavLinks>
        <AiOutlineGlobal />
        <IoSearchOutline />
        <IoPersonOutline />
        <BasketWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IoBagOutline onClick={handleBagClick} />
          {isModalVisible && (
            <ModalWrapper>
              <BasketModal
                itemName={itemName}
                price={price}
                size={size}
                quantity={quantity}
                subtotal={subtotal}
              />
            </ModalWrapper>
          )}
        </BasketWrapper>

        <RxHamburgerMenu />
      </NavLinks>
    </Nav>
  );
}
