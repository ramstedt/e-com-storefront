"use client";
import styled from "styled-components";
import CtaButton from "../Atoms/CtaButton/CtaButton";
import Image from "next/image";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100dvh - 50px);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  max-width: 16rem;
  position: relative;
  z-index: 700;
  margin: auto;
  text-align: center;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    margin-left: 5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Text = styled.div``;

const Title = styled.div`
  color: white;
  font-size: 3rem;
`;

export default function Card({ buttonText, title, text, imageUrl }) {
  return (
    <Wrapper>
      <Image alt="" src={imageUrl} fill />
      <ContentWrapper>
        <Content>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <div>
            <CtaButton buttonText={buttonText} />
          </div>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}
