import styled from 'styled-components';
// import './BorderButtons.css';

const BorderButton1 = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: #566473;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #566473;
    border-right-color: #566473;
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #566473;
    border-left-color: #566473;
  }
  &:hover {
    &::before,
    &::after { width: 100%; height: 100%; }
  }
`;

const BorderButton2 = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: #16a085;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #16a085;
    transition: all 0.3s ease;
    transform: scale(0.85);
  }
  &:hover {
    &::before { top: 0; transform: scale(1); }
    &::after { transform: scale(1); }
  }
`;

const BorderButton3 = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: #435a6b;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #435a6b;
    border-right-color: #435a6b;
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #435a6b;
    border-left-color: #435a6b;
  }
  &:hover {
    &::before,
    &::after {
      border-bottom-color: #435a6b;
      border-right-color: #435a6b;
      border-top-color: #435a6b;
      border-left-color: #435a6b;
      width: 100%;
      height: 100%;
    }
  }
`;

const BorderButton4 = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: red;
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 0;
    left: 0;
    background-color: red;
    transition: width 0.3s ease-in-out;
    bottom: 0;
  }
  &:hover{ &::after { width: 50px; } }
`;

function BorderButtons() {
  return (
    <div>
      <h1>Border buttons</h1>
      <div className="container">
        <BorderButton1>Effect one</BorderButton1>
        <BorderButton2>Effect two</BorderButton2>
        <BorderButton3>Effect three</BorderButton3>
        <BorderButton4>Effect Four</BorderButton4>
      </div>
    </div>
  )
}

export default BorderButtons;