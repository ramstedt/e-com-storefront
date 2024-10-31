"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  min-width: 320px;
  min-height: 492px;
  background: red;
  max-width: 425px;
  @media (min-width: 768px) {
    width: 369px;
    height: 418px;
  }

  @media (min-width: 1024px) {
    width: 498px;
    height: 667px;
  }

  @media (min-width: 1024px) {
    width: 498px;
    height: 667px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 795px;
  }
`;

export default function ProductGallery({ product }) {
  return <Wrapper></Wrapper>;
}
