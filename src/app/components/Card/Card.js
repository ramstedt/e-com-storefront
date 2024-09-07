"use client";
import styled from "styled-components";
import CtaButton from "../_Atoms/CtaButton/CtaButton";
import Image from "next/image";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100dvh - 60px);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
  }

  video {
    position: relative;
    z-index: 10;
  }

  @media (min-width: 768px) {
    img {
    }
  }
`;

const ContentWrapper = styled.div`
  top: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  z-index: 100;
  margin: auto;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.5) 100%
  );
  @media (min-width: 768px) {
    align-items: center;
    left: 0;
    justify-content: flex-start;
    padding-left: 5rem;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 25rem;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Text = styled.div``;

const Title = styled.div`
  color: white;
  font-size: 3rem;
`;

export default function Card({
  buttonText,
  title,
  text,
  mediaUrl,
  altText,
  url,
}) {
  const regex = /^\/videos/;
  const isVideo = typeof mediaUrl === "string" && regex.test(mediaUrl);
  return (
    <Wrapper>
      {isVideo ? (
        <video src={mediaUrl} autoPlay muted playsInline loop></video>
      ) : (
        <Image
          alt={altText}
          src={mediaUrl}
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <ContentWrapper>
        <Content>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <div>
            <CtaButton buttonText={buttonText} url={url} />
          </div>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}
