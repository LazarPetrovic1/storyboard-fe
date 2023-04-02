import styled, { keyframes } from "styled-components";

const animate1 = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const animate2 = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const animate3 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const animate4 = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const DarkLink = styled.button`
  background: ${props => props.active ? "rgb(26, 26, 28)" : "transparent"};
  border: none;
  position: relative;
	padding: 0.5rem 0.75rem;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
	color: #999;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-family: consolas;
	font-weight: 700;
	overflow: hidden;
  & span:nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #171618, #3bff3b);
    animation: ${animate1} 2s linear infinite;
  }
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, #171618, #3bff3b);
    animation: ${animate2} 2s linear infinite;
    animation-delay: 1s;
  }
  & span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, #171618, #3bff3b);
    animation: ${animate3} 2s linear infinite;
  }
  & span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to top, #171618, #3bff3b);
    animation: ${animate4} 2s linear infinite;
    animation-delay: 1s;
  }
`;