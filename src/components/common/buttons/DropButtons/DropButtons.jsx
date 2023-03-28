import { DropButtonsWrapper } from "../../../../styled";

function DropButtons() {
  return (
    <section className="dropbuttonsroot my-3">
      <h1>Drop Buttons</h1>
      <DropButtonsWrapper>
        <div animrole="from-top" stylerole="button">From Top</div>
        <div animrole="from-left" stylerole="button">From Left</div>
        <div animrole="from-right" stylerole="button">From Right</div>
        <div animrole="from-center" stylerole="button">From Center</div>
        <div animrole="from-bottom" stylerole="button">From Bottom</div>
      </DropButtonsWrapper>
    </section>
  )
}

export default DropButtons;