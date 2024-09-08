import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;

  button {
    background: none;
  }
`;

const SearchInput = styled.input`
  width: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  padding: ${({ isVisible }) => (isVisible ? "0.5rem" : "0")};
  border: 1px solid black;
  background: white;
  transition: width 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
  outline: none;

  @media screen and (max-width: 425px) {
    //width: ${({ isVisible }) => (isVisible ? "100vw" : "0")};
    //transition: height 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
    //position: absolute;
    //top: 20px;
    //right: 0;
    //box-sizing: border-box;
    //z-index: 9999;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 88px;
  background-color: white;
  width: 100vw;
  border: 1px solid #ddd;
  box-sizing: border-box;
  z-index: 9999;
  left: 0;

  @media screen and (min-width: 768px) {
    width: 450px;
    right: 0;
    left: initial;
    top: 50px;
  }
`;

const SearchResultItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const ImageWrapper = styled.div`
  min-width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
`;

export default function Searcbutto() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products.json");
      const data = await res.json();
      const productsArray = Object.values(data);
      setProducts(productsArray);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm, products]);

  return (
    <Wrapper>
      <button>
        <IoSearchOutline onClick={() => setIsSearchVisible(!isSearchVisible)} />
      </button>

      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        isVisible={isSearchVisible}
      />

      {searchTerm && (
        <SearchResults>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SearchResultItem key={product.id}>
                <ImageWrapper>
                  <Image src={product.mediaUrl} alt={product.altText} fill />
                </ImageWrapper>
                <p>
                  <Link href={product.slug}>{product.name}</Link>
                  <br />${product.price}
                </p>
              </SearchResultItem>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </SearchResults>
      )}
    </Wrapper>
  );
}
