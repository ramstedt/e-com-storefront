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
import BasketModal from "../BasketModal/BasketModal"; // Import the BasketModal component
import { useState } from "react"; // Import useState hook
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
  top: 50px;
  right: 0;
  width: 100%;
  background: white;
  z-index: 1000;
`;
export default function Navbar({ logo }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
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

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          <IoBagOutline />
          {isModalVisible && (
            <ModalWrapper>
              <BasketModal />
            </ModalWrapper>
          )}
        </div>

        <RxHamburgerMenu />
      </NavLinks>
    </Nav>
  );
}
