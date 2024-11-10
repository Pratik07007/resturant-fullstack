import { atom } from "recoil";

const totalPrice = atom<string>({
  key: "totalPrice",
  default: "123",
});
