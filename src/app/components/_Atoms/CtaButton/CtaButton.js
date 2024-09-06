"use client";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled(Link)`
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
export default function CtaButton({ buttonText, url }) {
  return <Wrapper href={url}>{buttonText}</Wrapper>;
}
