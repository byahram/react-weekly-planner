import styled from "styled-components";
import Frame from "../components/Frame";
import Mask from "../components/Mask";
import ThemeBtn from "../components/ThemeBtn";

export default function Root() {
  return (
    <>
      <Frame />
      <Mask />
      <ThemeBtn />
      <MainWrap id="main"></MainWrap>
    </>
  );
}

const MainWrap = styled.main`
  display: flex;
  padding: 5rem;
`;
