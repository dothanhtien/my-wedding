import styled from "styled-components";

export const HomePageStyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;

  & > div {
    width: 45%;
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

      .heart {
        margin: 0 16px;

        i {
          color: red;
        }
      }
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
