import styled, { css } from "styled-components";

const btnHover = css`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  &:focus { outline: none; }
  &:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`;

export const Colour1 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
`;

export const Colour2 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
`;

export const Colour3 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
`;

export const Colour4 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
`;

export const Colour5 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
`;

export const Colour6 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);
  box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
`;

export const Colour7 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
`;

export const Colour8 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
`;

export const Colour9 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
`;

export const Colour10 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
`;

export const Colour11 = styled.button`
  ${btnHover}
  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);
  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
`;

export const GridBtnsContainer = styled.div` margin: 2rem 10%; text-align: center;`;
