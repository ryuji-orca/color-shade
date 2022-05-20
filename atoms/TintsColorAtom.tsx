import { atom } from "recoil";
import Values from "values.js";

export const TintsColorAtom = atom<Values[]>({
  key: "TintsColorAtom",
  default: [],
});
