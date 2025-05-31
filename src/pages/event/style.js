import styled from "styled-components";

export const EventPageStyledWrapper = styled.div`
  min-height: calc(100vh - 56px);

  h1 {
    height: 100px;
    padding-top: 48px;
    text-align: center;
    margin-bottom: 40px;
  }

  .page-container {
    display: flex;
    height: calc(100vh - 56px - 148px);

    @media (max-width: 991px) {
      flex-direction: column;
    }
  }
`;

export const IntroImage = styled.div`
  width: 50%;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -100px;
      right: -10px;
      background-image: url(/assets/images/f1.png);
      width: 50%;
      height: 40%;
      background-repeat: no-repeat;
      background-size: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -100px;
      left: -80px;
      height: 40%;
      width: 45%;
      background-image: url(/assets/images/f2.png);
      background-repeat: no-repeat;
      background-size: 100%;
      transform: rotate(0);
      z-index: 0;
    }

    img {
      width: 70%;
      transform: rotate(-5deg);
      border: 2px solid #eee;
      box-shadow: -16px 12px 60px #969696;
    }

    @media (max-width: 575px) {
      &::before {
        right: -70px;
        top: -80px;
      }

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const EventSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const EventItem = styled.div`
  padding: 20px 40px;
  box-shadow: 0 0 32px #cdcdcd;
  border-radius: 8px;
  margin-bottom: 40px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  i {
    color: red;
  }
`;
