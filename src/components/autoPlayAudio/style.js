import styled from "styled-components";

export const AutoPlayAudioStyledWrapper = styled.div`
  position: fixed;
  bottom: ${({ $isMobile }) => ($isMobile ? "80px" : "20px")};
  left: 20px;
  border-radius: 50%;

  button {
    font-size: 24px;
    border-radius: 50%;
    border-width: 2px;
  }
`;
