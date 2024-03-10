import { atom } from "recoil";
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
export const evenSelector = selector({
  name: "evenSelector",
  get: ({ props }) => {
    //derived
    const count = props.get(countAtom);
    return count % 2;
  },
});
