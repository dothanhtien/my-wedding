import styled from "styled-components";

export const HomePageStyledWrapper = styled.div`
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-size: cover;
  background-position-x: 75%;
  background-position-y: bottom;
  background-repeat: no-repeat;

  height: calc(100vh - 60px);
  display: flex;
  justify-content: start;
  align-items: center;

  .main {
    width: 50%;
    padding-left: 50px;
    text-align: center;

    .coupleNames {
      color: white;
      font-size: 60px;
      font-family: "Great Vibes", cursive;
      font-weight: 700;
      font-style: normal;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .gettingMarried {
      color: white;
      margin: 10px 0 40px;
      font-size: 28px;
    }

    @media (max-width: 992px) {
      width: 100%;
      padding-left: 0;
    }
  }
`;
