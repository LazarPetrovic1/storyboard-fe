import styled from 'styled-components';

const FancyButtonWrapper = styled.button`
  --offset: 10px;
  --border-size: 2px;
  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 0;
  background: transparent;
  color: #e55743;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: background 0.8s ease;
  &:hover {
    background: rgba(100, 0, 0, .03);
    & [stylerole="horizontal"] { transform: scaleX(0); }
    & [stylerole="vertical"] { transform: scaleY(0); }
  }
  & [stylerole] {
    position: absolute;
    top: var(--horizontal-offset, 0);
    right: var(--vertical-offset, 0);
    bottom: var(--horizontal-offset, 0);
    left: var(--vertical-offset, 0);
    transition: transform 0.8s ease;
    will-change: transform;
    &::before {
      content: '';
      position: absolute;
      border: inherit;
    }
  }
  & [stylerole="horizontal"] {
    --vertical-offset: calc(var(--offset) * -1);
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;
    &::before {
      top: calc(var(--vertical-offset) - var(--border-size));
      bottom: calc(var(--vertical-offset) - var(--border-size));
      left: calc(var(--vertical-offset) * -1);
      right: calc(var(--vertical-offset) * -1);
    }
  }
  & [stylerole="vertical"] {
    --horizontal-offset: calc(var(--offset) * -1);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;
    &::before {
      top: calc(var(--horizontal-offset) * -1);
      bottom: calc(var(--horizontal-offset) * -1);
      left: calc(var(--horizontal-offset) - var(--border-size));
      right: calc(var(--horizontal-offset) - var(--border-size));
    }
  }
`;

function FancyButton({ children }) {
  return (
    <div>
      <h1 className="mb-5">Fancy Button</h1>
      <div className="d-flex justify-content-center">
        <FancyButtonWrapper>
          {children}
          <div stylerole="horizontal"></div>
          <div stylerole="vertical"></div>
        </FancyButtonWrapper>
      </div>
    </div>
  )
}

export default FancyButton;