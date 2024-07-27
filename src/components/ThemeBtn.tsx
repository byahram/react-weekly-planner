import { useSetRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { ThemeFlag, themeAtom } from "../atoms";
import { darkTheme } from "../theme";

export default function ThemeBtn() {
  const setThemeAtom = useSetRecoilState(themeAtom);
  const currTheme = useRecoilValue(themeAtom);

  const toggleDarkAtom = () => {
    setThemeAtom((prev) =>
      prev === ThemeFlag.light ? ThemeFlag.dark : ThemeFlag.light
    );
  };

  return (
    <ThemeWrap id="theme">
      <ThemeInner>
        {/* LightBtn */}
        <BtnWrap onClick={toggleDarkAtom}>
          <LightBtn currtheme={currTheme} />
          <Label>Light</Label>
        </BtnWrap>

        {/* DarkBtn */}
        <BtnWrap onClick={toggleDarkAtom}>
          <DarkBtn currtheme={currTheme} />
          <Label>Dark</Label>
        </BtnWrap>
      </ThemeInner>
    </ThemeWrap>
  );
}

const ThemeWrap = styled.div`
  position: fixed;
  left: -2.7rem;
  bottom: 5.5rem;
  transform: rotate(-90deg);
  z-index: 1000;
`;
const ThemeInner = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;
  font-weight: 500;
`;
const Label = styled.label`
  cursor: pointer;
  font-size: medium;
  color: ${(props) => props.theme.textColor};
`;

// BtnProps
interface BtnProps {
  currtheme: ThemeFlag;
}
const Btn = css<BtnProps>`
  width: 0.75rem;
  aspect-ratio: 1;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
    props.currtheme === ThemeFlag.light
      ? props.theme.textColor
      : darkTheme.textColor};
`;
const LightBtn = styled.button<BtnProps>`
  ${Btn}
  background: ${(props) =>
    props.currtheme === ThemeFlag.light
      ? props.theme.textColor
      : darkTheme.bgColor};
`;
const DarkBtn = styled.button<BtnProps>`
  ${Btn}
  background: ${(props) =>
    props.currtheme === ThemeFlag.light
      ? props.theme.bgColor
      : darkTheme.textColor};
`;

