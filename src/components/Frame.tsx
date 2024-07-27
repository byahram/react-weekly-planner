import React from "react";
import styled from "styled-components";

export default function Frame() {
  return (
    <FrameWrap id="frame">
      <FrameLine />
      <FrameLine />
      <FrameLine />
      <FrameLine />
    </FrameWrap>
  );
}

const FrameWrap = styled.div`
  position: fixed;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
  padding: 2rem;
`;
const FrameLine = styled.div`
  position: absolute;
  background: ${(props) => props.theme.textColor};
  margin: auto 0;

  &:nth-child(1) {
    width: 1px;
    height: calc(100% - 4rem);
  }
  &:nth-child(2) {
    width: 1px;
    height: calc(100% - 4rem);
    right: 2rem;
  }
  &:nth-child(3) {
    width: calc(100% - 4rem);
    height: 1px;
  }
  &:nth-child(4) {
    width: calc(100% - 4rem);
    height: 1px;
    bottom: 2rem;
  }
`;
