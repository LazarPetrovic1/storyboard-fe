import { useTheme, useFontFamily, useFontSize } from "../../hooks";
import { StyledLayout } from "../../styled";

function Layout({ children }) {
  const [theme] = useTheme();
  const [fontFamily] = useFontFamily();
  const [fontSize] = useFontSize();
  return (
    <StyledLayout
      fontFamily={fontFamily}
      theme={theme}
      fontSize={fontSize}
    >{children}</StyledLayout>
  )
}

export default Layout;