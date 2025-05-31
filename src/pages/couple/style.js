import styled from "styled-components";

export const CouplePageStyledWrapper = styled.div`
  height: calc(100vh - 56px);
  background-color: #ffe2e5;

  .container {
    & > h1 {
      padding-top: 48px;
    }

    & > p {
      margin: 24px 0 48px;
    }
  }

  @media (max-width: 992px) {
    height: 100%;
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

export const HeartBeat = styled.div`
  display: inline-block;
  font-size: 48px;
  color: red;
  animation: heartbeat 2s infinite;

  @media (max-width: 992px) {
    margin-bottom: 16px;
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
`;
