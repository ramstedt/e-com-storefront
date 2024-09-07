"use client";
import styled from "styled-components";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const Wrapper = styled.button`
  padding: 15px 25px 15px 25px;
  display: block;
  width: 180px;
  margin: auto;
  background-color: #ffffff;
  text-transform: uppercase;
  color: black;
  font-size: 0.75rem;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;
export default function SearchButton({}) {
  return <IoSearchOutline />;
}
