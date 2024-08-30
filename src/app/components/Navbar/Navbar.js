"use client";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 0 1rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Navbar({ logo }) {
  return (
    <Wrapper>
      <Link href="/">{logo}</Link>
      <Links>
        <AiOutlineGlobal />
        <IoSearchOutline />
        <MdOutlinePersonOutline />
        <IoBagOutline />
        <RxHamburgerMenu />
      </Links>
    </Wrapper>
  );
}
