import styled from "styled-components";

export default function Mask() {
  return (
    <MaskWrap id="mask">
      <MaskLine />
      <MaskLine />
      <MaskLine />
      <MaskLine />
    </MaskWrap>
  );
}

const MaskWrap = styled.div`
  position: fixed;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999;
  padding: 2rem;
`;
const MaskLine = styled.div`
  position: absolute;
  //background: ${(props) => props.theme.bgColor};

  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
  }
  &:nth-child(2) {
    top: 2rem;
    right: 0;
    width: 2rem;
    height: calc(100% - 4rem);
  }
  &:nth-child(3) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2rem;
  }
  &:nth-child(4) {
    left: 0;
    top: 2rem;
    width: 2rem;
    height: calc(100% - 4rem);
  }
`;
