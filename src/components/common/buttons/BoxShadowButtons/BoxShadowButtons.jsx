import { BoxShadowButton } from "../../../../styled"

function BoxShadowButtons() {
  return (
    <div className="buttons">
      <h1>Simple hover effects with <code>box-shadow</code></h1>
      <BoxShadowButton className="fill">Fill In</BoxShadowButton>
      <BoxShadowButton className="pulse">Pulse</BoxShadowButton>
      <BoxShadowButton className="close">Close</BoxShadowButton>
      <BoxShadowButton className="raise">Raise</BoxShadowButton>
      <BoxShadowButton className="up">Fill Up</BoxShadowButton>
      <BoxShadowButton className="slide">Slide</BoxShadowButton>
      <BoxShadowButton className="offset">Offset</BoxShadowButton>
    </div>
  )
}

export default BoxShadowButtons