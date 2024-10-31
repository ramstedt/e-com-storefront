"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "next/navigation";
import ProductGallery from "../../../components/ProductGallery/ProductGallery";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function Products() {
  const pathname = useParams();
  const [product, setProduct] = useState([]);
  const entries = Object.entries(pathname);
  const productName = entries.slice(-1)[0][1];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products.json?slug=${productName}`);
        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    fetchProduct();
  }, [productName]);

  return (
    <Wrapper>
      <ProductGallery product={product} />
    </Wrapper>
  );
}
