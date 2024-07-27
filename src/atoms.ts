import { atom } from "recoil";

export enum ThemeFlag {
  light,
  dark,
}

export const themeAtom = atom({
  key: "themeAtom",
  default: ThemeFlag.light,
});
