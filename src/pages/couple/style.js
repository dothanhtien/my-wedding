import styled from "styled-components";

export const CouplePageStyledWrapper = styled.div`
  min-height: calc(100vh - 60px);
  background-color: #ffe2e5;

  .container {
    & > h1 {
      padding-top: 48px;
    }

    & > p {
      margin: 24px 0 48px;
    }
  }
`;

export const IntroSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .name {
    font-size: 28px;
    margin: 16px 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const IntroItem = styled.div`
  width: 380px;
  height: 380px;
  border: 5px solid red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const IntroItemContainer = styled.div`
  width: 360px;
  height: 360px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    // height: 100%;
    objectfit: cover;
    objectposition: top;
  }
`;
