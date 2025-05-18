import styled from "styled-components";

export const AlbumPageStyledWrapper = styled.div`
  height: 100%;
  background-color: #ffe2e5;

  h3 {
    padding: 24px 0 12px;
  }

  .albumItem {
    margin-bottom: 24px;

    img {
      width: 100%;
      border-radius: 8px;
    }

    @media (max-width: 576px) {
      margin-bottom: 12px;
    }
  }
`;
