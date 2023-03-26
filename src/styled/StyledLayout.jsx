import styled from 'styled-components'
import { THEME_TEXT, THEMES_BG } from '../constants';

// background-color: ${props => props.isDarkTheme ? "transparent" : "#eee"};
// color: ${props => props.isDarkTheme ? "white" : "black" };
// Nav height @ 56px
const StyledLayout = styled.section`
  min-height: calc(100vh - 56px);
  margin: 0;
  padding: 0;
  position: relative;
  background: ${props => `${THEMES_BG[props.theme]}`} !important;
  color: ${props => `${THEME_TEXT[props.theme]}`} !important;
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.fontFamily};
  z-index: 1;
  overflow: auto;
`;

export default StyledLayout