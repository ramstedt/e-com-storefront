"use client";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import BasketModal from "../BasketModal/BasketModal";
import { useState } from "react";
import { Quicksand } from "next/font/google";
import styled from "styled-components";
import SearchButton from "../_Atoms/SearchButton/SearchButton";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Nav = styled.nav`
  height: 60px;
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
  align-items: center;

  button {
    background: none;
  }

  svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 35px;
  right: 0;
  width: 100%;
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

export default function Navbar({ logo, cartItems }) {
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
        <button>
          <AiOutlineGlobal />
        </button>
        <SearchButton />
        <button>
          <IoPersonOutline />
        </button>
        <BasketWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>
            <IoBagOutline onClick={handleBagClick} />
          </button>
          {isModalVisible && (
            <ModalWrapper>
              <BasketModal cartItems={cartItems} />
            </ModalWrapper>
          )}
        </BasketWrapper>

        <RxHamburgerMenu />
      </NavLinks>
    </Nav>
  );
}
