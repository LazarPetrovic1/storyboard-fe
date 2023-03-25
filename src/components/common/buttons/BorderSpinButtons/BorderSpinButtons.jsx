import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 0;
  position: relative !important;
  width: 150px;
  height: 40px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  &:hover {
    & [stylerole="shape"] {
      stroke-dasharray: 50 0;
      stroke-width: 3px;
      stroke-dashoffset: 0;
      stroke: #06D6A0;
    }
  }
  & [stylerole="shape"] {
    stroke-width: 6px;
    fill: transparent;
    stroke: #009FFD;
    stroke-dasharray: 85 400;
    stroke-dashoffset: -220;
    transition: 1s all ease;
  }
  & [stylerole="text"] {
    position: relative;
    margin-top: -35px;
    text-align: center;
    & a {
      color: white;
      text-decoration: none;
      font-weight: 100;
      font-size: 1.1em;
    }
    &.text {
      color: white;
      position: absolute !important;
      z-index: 50 !important;
    }
  }
`;

function BorderSpinButton({ children }) {
  return (
    <ButtonWrapper stylerole="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect stylerole="shape" height="40" width="150" />
        <div stylerole="text">
          <span stylerole="spot"></span>
          <span className="text">{ children }</span>
        </div>
      </svg>
    </ButtonWrapper>
  )
}

function BorderSpinButtons() {
  return (
    <div>
      <h1>Border Spin Buttons</h1>
      <div className="mx-auto my-4">
        <BorderSpinButton>Button 1</BorderSpinButton>
        <BorderSpinButton>Button 2</BorderSpinButton>
        <BorderSpinButton>Button 3</BorderSpinButton>
      </div>
    </div>
  )
}

export default BorderSpinButtons;