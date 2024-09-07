"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard/ProductCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products.json");
        const data = await response.json();
        setProducts(Object.values(data));
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Wrapper>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}
