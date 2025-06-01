import React from "react";
import styled from "styled-components";

export const HeartBeatWrapper = styled.div`
  display: inline-block;
  font-size: 48px;
  color: red;
  animation: heartbeat 2s infinite;

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

const HeartBeat = () => {
  return (
    <HeartBeatWrapper>
      <i className="bi bi-heart-fill"></i>
    </HeartBeatWrapper>
  );
};

export default HeartBeat;
