import { atom } from "recoil";
import Values from "values.js";

export const ShadesColorAtom = atom<Values[]>({
  key: "ShadesColorAtom",
  default: [],
});
