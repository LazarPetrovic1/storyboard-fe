import './DropButtons.css'

function DropButtons() {
  return (
    <section className="dropbuttonsroot">
      <h1>Drop Buttons</h1>
      <div className="dropbuttons">
        <div className="itembutton itembuttonbtn from-top">From Top</div>
        <div className="itembutton itembuttonbtn from-left">From Left</div>
        <div className="itembutton itembuttonbtn from-right">From Right</div>
        <div className="itembutton itembuttonbtn from-center">From Center</div>
        <div className="itembutton itembuttonbtn from-bottom">From Bottom</div>
      </div>
    </section>
  )
}

export default DropButtons;