import styled from "styled-components";

export const InvitationStyledWrapper = styled.div`
  min-height: 100%;
`;

export const InvitationSection = styled.div`
  margin: 48px 0;
  font-size: 20px;

  h1 {
    font-family: Great Vibes, cursive;
    font-size: 60px;
    letter-spacing: 10px;
  }

  @media (max-width: 576px) {
    font-size: 16px;

    p {
      margin: 0;

      span {
        display: block;
      }
    }
  }
`;

export const IntroImagesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  .mainImage {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (max-width: 1199px) {
    .mainImage {
      width: 100%;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 230px;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-size: cover;
  background-position-y: 42%;
`;

export const ContentSection = styled.div`
  font-size: 20px;
  padding: 48px 0;

  h2 {
    font-family: Great Vibes, cursive;
    font-size: 60px;
    padding-bottom: 24px;

    span {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  div {
    p {
      span {
        display: block;
      }
    }
  }

  @media (max-width: 576px) {
    font-size: 16px;

    h2 {
      font-size: 60px;

      span {
        display: block;
        margin-right: 0;
      }
    }
  }
`;

export const AdditionalImagesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  div {
    width: calc(100% / 3);

    img {
      width: 100%;
    }
`;

export const AcknowledgementSection = styled.div`
  padding: 48px 0 48px;
  font-size: 20px;

  p {
    margin-bottom: 0;
  }

  i {
    color: red;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
