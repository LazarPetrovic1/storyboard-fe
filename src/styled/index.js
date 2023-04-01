import { BoxShadowButton, BoxShadowLink } from "./BoxShadowButton";
import { BtnCont } from "./CirclingBorderButton";
import { DropButtonsWrapper, DropButtonsListWrapper } from "./DropButtons";
import StyledLayout from "./StyledLayout";
import {
  VictoriaButton1,
  VictoriaButton2,
  VictoriaButton3,
  VictoriaButton4,
  SandyButton1,
  SandyButton2,
  SandyButton3,
  SandyButton4,
  GibsonButton1,
  GibsonButton2,
  GibsonButton3,
  GibsonButton4,
  TharButton1,
  TharButton2,
  TharButton3,
  TharButton4,
} from "./VariousButtons";
import {
  BorderButton1,
  BorderButton2,
  BorderButton3,
  BorderButton4,
  BorderLink1,
  BorderLink2,
  BorderLink3,
  BorderLink4,
} from './BorderButtons';
import { ThemedButton } from "./ThemedButton";
import styled from "styled-components";

export const ScrollContainer = styled.article`
  height: calc(100vh - 49px - ${props => props.hs ? props.hs : 0}px - 1rem);
  overflow: auto;
  flex-wrap: wrap;
`;

export {
  VictoriaButton1,
  VictoriaButton2,
  VictoriaButton3,
  VictoriaButton4,
  SandyButton1,
  SandyButton2,
  SandyButton3,
  SandyButton4,
  GibsonButton1,
  GibsonButton2,
  GibsonButton3,
  GibsonButton4,
  TharButton1,
  TharButton2,
  TharButton3,
  TharButton4,
  StyledLayout,
  BtnCont,
  BoxShadowButton,
  BoxShadowLink,
  DropButtonsWrapper,
  DropButtonsListWrapper,
  BorderButton1,
  BorderButton2,
  BorderButton3,
  BorderButton4,
  BorderLink1,
  BorderLink2,
  BorderLink3,
  BorderLink4,
  ThemedButton
}