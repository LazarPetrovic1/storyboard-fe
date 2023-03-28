import { BoxShadowButton, BoxShadowLink } from "../../../../styled"

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
      <div className="my-4">
        <BoxShadowLink to="/" className="fill">Fill In</BoxShadowLink>
        <BoxShadowLink to="/" className="pulse">Pulse</BoxShadowLink>
        <BoxShadowLink to="/" className="close">Close</BoxShadowLink>
        <BoxShadowLink to="/" className="raise">Raise</BoxShadowLink>
        <BoxShadowLink to="/" className="up">Fill Up</BoxShadowLink>
        <BoxShadowLink to="/" className="slide">Slide</BoxShadowLink>
        <BoxShadowLink to="/" className="offset">Offset</BoxShadowLink>
      </div>
    </div>
  )
}

export default BoxShadowButtons