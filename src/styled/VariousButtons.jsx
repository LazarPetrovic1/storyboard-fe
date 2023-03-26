import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const animatedbutton = css`
  &:link, &:visited {
    position: relative;
    display: block;
    padding: 14px 15px;
    color: #fff;
    font-size:14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: .08em;
    border-radius: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    &::after {
      content: "";
      position: absolute;
      height: 0%;
      left: 50%;
      top: 50%;
      width: 150%;
      z-index: -1;
      -webkit-transition: all 0.75s ease 0s;
      -moz-transition: all 0.75s ease 0s;
      -o-transition: all 0.75s ease 0s;
      transition: all 0.75s ease 0s;
    }
    &:hover {
      color: #FFF;
      text-shadow: none;
      &::after { height: 450%; }
    }
  }
`;

export const VictoriaButton1 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #D24D57 !important;
  &::after {
    background: #D24D57;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  }
`;

export const VictoriaButton2 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #D24D57 !important;
  &::after {
    background: #D24D57;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    transform: translateX(-50%) translateY(-50%) rotate(25deg);
  }
`;

export const VictoriaButton3 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #D24D57 !important;
  &::after {
    background: #D24D57;
    opacity: .5;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  &:hover {
    &::after { height: 140%; opacity: 1; }
  }
`;

export const VictoriaButton4 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #D24D57 !important;
  &::after {
    background: #D24D57;
    opacity: .5;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
  }
  &:hover {
    &::after { height: 600% !important; opacity: 1; }
  }
`;

export const SandyButton1 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #AEA8D3 !important;
	color: #FFF;
  &::after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  &:hover {
    &::after {
      height: 120% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const SandyButton2 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #AEA8D3 !important;
	color: #FFF;
  &::after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
  }
  &:hover {
    &::after {
      height: 600% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const SandyButton3 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #AEA8D3 !important;
	color: #FFF;
  &::after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  }
  &:hover {
    &::after {
      height: 400% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const SandyButton4 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #AEA8D3 !important;
	color: #FFF;
  &::after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    transform: translateY(-50%) translateX(-50%) rotate(25deg);
  }
  &:hover {
    &::after {
      height: 400% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const GibsonButton1 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #65b37a !important;
	color: #FFF;
  &::after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    transform: translateX(-50%) translateY(-50%) rotate(25deg);
  }
  &:hover {
    &::after {
      height: 600% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const GibsonButton2 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #65b37a !important;
	color: #FFF;
  &::after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  }
  &:hover {
    &::after {
      height: 600% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const GibsonButton3 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #65b37a !important;
	color: #FFF;
  &::after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    transform: translateX(-50%) translateY(-50%) rotate(90deg);
  }
  &:hover {
    &::after {
      height: 600% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const GibsonButton4 = styled(Link)`
  ${animatedbutton}
  border: 2px solid #65b37a !important;
	color: #FFF;
  &::after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  &:hover {
    &::after {
      height: 600% !important;
      opacity: 1;
      color: #FFF;
    }
  }
`;

export const TharButton1 = styled(Link)`
  ${animatedbutton}
  color: #fff;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #F7CA18 !important;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: none;
    &::before {
      bottom: 0%;
      top: auto;
      height: 100%;
    }
  }
  &::before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
`;

export const TharButton2 = styled(Link)`
  ${animatedbutton}
  color: #fff;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #F7CA18 !important;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: ntwo;
    &::before {
      top: 0%;
      bottom: auto;
      height: 100%;
    }
  }
  &::before {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
`;

export const TharButton3 = styled(Link)`
  ${animatedbutton}
  color: #fff;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #F7CA18 !important;
	transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nthree;
    &::before {
      left: 0%;
      right: auto;
      width: 100%;
    }
  }
  &::before {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const TharButton4 = styled(Link)`
  ${animatedbutton}
  color: #fff;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #F7CA18 !important;
	transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nfour;
    &::before {
      right: 0%;
      left: auto;
      width: 100%;
    }
  }
  &::before {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;