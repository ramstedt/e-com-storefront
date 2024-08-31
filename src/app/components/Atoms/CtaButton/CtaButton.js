"use client";
import styled from "styled-components";

const Wrapper = styled.button`
  padding: 15px 25px 15px 25px;
  min-width: 180px;
  background-color: #ffffff;
  text-transform: uppercase;
  color: black;
  font-size: 0.75rem;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;
export default function CtaButton({ buttonText }) {
  return <Wrapper>{buttonText}</Wrapper>;
}
