import styled from 'styled-components';

const BorderButton = styled.button`
  box-shadow: inset 0 0 0 4px #58afd1;
  color: #58afd1;
  transition: color 0.25s 0.0833333333s;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem 'Roboto Slab', sans-serif;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
  &:focus { outline: 2px dotted #55d7dc; }
  &::before, &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }
  &::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  &::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  &:hover {
    color: #ffe593;
    &::before, &::after {
      border-color: #ffe593;
      transition: border-color 0s, width 0.25s, height 0.25s;
      width: 100%;
      height: 100%;
    }
    &::before { transition-delay: 0s, 0s, 0.25s; }
    &::after { transition-delay: 0s, 0.25s, 0s; }
  }
`;

function ColourButton() {
  return <BorderButton>Draw Border</BorderButton>
}

export default ColourButton;