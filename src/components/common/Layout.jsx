import { useEffect } from "react";
import { useTheme, useFontFamily, useFontSize } from "../../hooks";
import { StyledLayout } from "../../styled";

function Layout({ children }) {
  const [theme] = useTheme();
  const [fontFamily] = useFontFamily();
  const [fontSize] = useFontSize();
  useEffect(() => {
    console.log("OL", { theme, fontFamily, fontSize });
  }, [theme, fontFamily, fontSize]);
  return (
    <StyledLayout
      fontFamily={fontFamily}
      theme={theme}
      fontSize={fontSize}
    >{children}</StyledLayout>
  )
}

export default Layout;