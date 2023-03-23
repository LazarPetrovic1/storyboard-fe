import './FancyButton.css'

function FancyButton() {
  return (
    <div>
      <h1 className="mb-5">Fancy Button</h1>
      <div className="d-flex justify-content-center">
        <button className="fancybutton">
          Fancy Button
          <div className="fancybutton__horizontal"></div>
          <div className="fancybutton__vertical"></div>
        </button>
      </div>
    </div>
  )
}

export default FancyButton;