import styled, { keyframes } from 'styled-components';
const move1 = keyframes`
0% {
  height: 100%;
  bottom: 0;
}
  54% {
    height: 0;
    bottom: 100%;
}
  55% {
    height: 0;
    bottom: 0;
}
  100% {
    height: 100%;
    bottom: 0;
}
`;
const move2 = keyframes`
  0% {
    width: 0;
    left: 0;
  }
    50% {
      width: 100%;
      left: 0;
  }
    100% {
      width: 0;
      left: 100%;
  }
`
const move3 = keyframes`
  0% {
    height: 100%;
    top: 0;
  }
    54% {
      height: 0;
      top: 100%;
  }
    55% {
      height: 0;
      top: 0;
  }
    100% {
      height: 100%;
      top: 0;
  }
`
const move4 = keyframes`
  0% {
    width: 0;
    right: 0;
  }
    55% {
      width: 100%;
      right: 0;
  }
    100% {
      width: 0;
      right: 100%;
  }
`

export const BtnCont = styled.div`
  text-align: center;
  & [stylerole="linkbutton"] {
    position: relative;
    padding: 20px 70px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: em(18px);
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-font-smoothing: antialiased;
    &:hover {
      border: none;
      & [stylerole="line-1"] { animation: ${move1} 1250ms infinite linear; }
      & [stylerole="line-2"] { animation: ${move2} 1250ms infinite linear; }
      & [stylerole="line-3"] { animation: ${move3} 1250ms infinite linear; }
      & [stylerole="line-4"] { animation: ${move4} 1250ms infinite linear; }
    }
  }
  & [stylerole="line-1"] {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    background-color: white;
    left: 0;
    bottom: 0;
  }
  & [stylerole="line-2"] {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background-color: white;
    left: 0;
    top: 0;
  }
  & [stylerole="line-3"] {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    background-color: white;
    right: 0;
    top: 0;
  }
  & [stylerole="line-4"] {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background-color: white;
    right: 0;
    bottom: 0;
  }
`;