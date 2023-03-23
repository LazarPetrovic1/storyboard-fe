import './BoxShadowButtons.css';
function BoxShadowButtons() {
  return (
    <div className="buttons">
      <h1>Simple hover effects with <code>box-shadow</code></h1>
      <button className="boxshadowbutton fill">Fill In</button>
      <button className="boxshadowbutton pulse">Pulse</button>
      <button className="boxshadowbutton close">Close</button>
      <button className="boxshadowbutton raise">Raise</button>
      <button className="boxshadowbutton up">Fill Up</button>
      <button className="boxshadowbutton slide">Slide</button>
      <button className="boxshadowbutton offset">Offset</button>
    </div>
  )
}

export default BoxShadowButtons