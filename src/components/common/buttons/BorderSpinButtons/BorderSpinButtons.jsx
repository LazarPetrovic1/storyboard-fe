import './BorderSpinButtons.css';

function BorderSpinButtons() {
  return (
    <div>
      <h1>Border Spin Buttons</h1>
      <div className="mx-auto my-4">
        <div className="svg-wrapper">
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="150" />
            <div id="text">
              <span className="spot"></span>Button 1
            </div>
          </svg>
        </div>

        <div className="svg-wrapper">
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="150" />
            <div id="text">
              <span className="spot"></span>Button 2
            </div>
          </svg>
        </div>

        <div className="svg-wrapper">
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="150" />
            <div id="text">
              <span className="spot"></span>Button 3
            </div>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default BorderSpinButtons;