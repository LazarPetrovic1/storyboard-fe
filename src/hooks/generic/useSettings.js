import { useLocalStorage } from "./useLocalStorage";
import { APP_PREFIX, INITIAL_FONT_FAMILY_VALUE } from '../../constants';

function useTheme(value = "dark") {
  const [theme, setTheme, removeTheme] = useLocalStorage(`${APP_PREFIX}_theme`, value);
  return [theme, setTheme, removeTheme];
}

function useFontFamily(value = INITIAL_FONT_FAMILY_VALUE) {
  const [fontFamily, setFontFamily, removeFontFamily] =
    useLocalStorage(`${APP_PREFIX}_fontFamily`, value);
  return [fontFamily, setFontFamily, removeFontFamily];
}

function useFontSize(value = 16) {
  const [fontSize, setFontSize, removeFontSize] = useLocalStorage(`${APP_PREFIX}_fontSize`, value);
  return [fontSize, setFontSize, removeFontSize];
}

export { useTheme, useFontFamily, useFontSize };