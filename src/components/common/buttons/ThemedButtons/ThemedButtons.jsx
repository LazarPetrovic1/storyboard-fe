import styled from 'styled-components';
// import './ThemedButtons.css'

const ThemedButton = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  background: none;
  border-radius: 0;
  padding: 1.2em 5em;
  letter-spacing: 0.35em;
  font-size: 0.7em;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  margin: 1em;
  &.blue {
    box-shadow: inset 0 0 1em rgba(0, 170, 170, 0.5), 0 0 1em rgba(0, 170, 170, 0.5);
    border: #0dd solid 2px;
    &:hover {
      background-color: #0dd;
      box-shadow: inset 0 0 0 rgba(0, 170, 170, 0.5), 0 0 1.5em rgba(0, 170, 170, 0.7);
    }
  }
  &.red {
    box-shadow: inset 0 0 1em rgba(251, 81, 81, 0.4), 0 0 1em rgba(251, 81, 81, 0.4);
    border: #fb5454 solid 2px;
    &:hover {
      background-color: #fb5454;
      box-shadow: inset 0 0 0 rgba(251, 81, 81, 0.4), 0 0 1.5em rgba(251, 81, 81, 0.6);
    }
  }
  &.white {
    box-shadow: inset 0 0 0.8em rgba(255, 255, 255, 0.3), 0 0 0.8em rgba(255, 255, 255, 0.3);
    border: #fff solid 2px;
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: #fff;
      box-shadow: inset 0 0 0 rgba(255, 255, 255, 0.3), 0 0 1.2em rgba(255, 255, 255, 0.5);
    }
  }
`;

function ThemedButtons() {
  return (
    <section className="pt-2 pb-5">
      <h1 className="mt-2">Themed Buttons</h1>
      <div className="d-flex justify-content-center mt-5">
        <ThemedButton className="blue">ACCEPT</ThemedButton>
        <ThemedButton className="red">REFUSE</ThemedButton>
        <ThemedButton className="white">MORE INFO</ThemedButton>
      </div>
    </section>
  )
}

export default ThemedButtons;