import React from "react";
import styled, { keyframes } from "styled-components";

const strokeAnimation = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  30% {
    stroke-dashoffset: 1550;
  }
  60% {
    stroke-dashoffset: 3100;
    fill: transparent;
    transform: scale(1);
  }
  100% {
    stroke-dashoffset: 3100;
  }
`;

const HeartLoadingWrapper = styled.div`
  stroke: ${({ $strokeColor }) => $strokeColor ?? "#eea5bb"};
  fill: transparent;
  stroke-width: 11;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: inline-block;

  svg {
    overflow: visible;
    width: 11rem;

    path {
      animation: ${strokeAnimation} 3s ease-in-out infinite forwards;
      stroke-dasharray: 1550;
      stroke-dashoffset: 0;
      transform-origin: center;
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: ${({ color }) => color ?? "red"};
    font-family: Great Vibes, cursive;

    p {
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const HeartLoading = ({ color, strokeColor }) => {
  return (
    <HeartLoadingWrapper color={color} $strokeColor={strokeColor}>
      <svg viewBox="0 0 512 512" width="100">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
      </svg>

      <div className="title">
        <p>T</p>
        <p>&</p>
        <p>L</p>
      </div>
    </HeartLoadingWrapper>
  );
};

export default HeartLoading;
