import { useContext } from "react";
import { UserContext } from "./Context";

export const useWord = () => {
  const { setWord, word } = useContext(UserContext);
  return [word, setWord];
};

export const useTranslate = () => {
  const { translate } = useContext(UserContext);
  return translate;
};
