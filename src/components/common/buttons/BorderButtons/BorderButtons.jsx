import {
  BorderButton1,
  BorderButton2,
  BorderButton3,
  BorderButton4,
  BorderLink1,
  BorderLink2,
  BorderLink3,
  BorderLink4,
} from "../../../../styled";

function BorderButtons() {
  return (
    <div>
      <h1>Border buttons</h1>
      <div className="container">
        <BorderButton1>Effect one (buttons)</BorderButton1>
        <BorderButton2>Effect two (buttons)</BorderButton2>
        <BorderButton3>Effect three (buttons)</BorderButton3>
        <BorderButton4>Effect Four (buttons)</BorderButton4>
        <BorderLink1>Effect one (links)</BorderLink1>
        <BorderLink2>Effect two (links)</BorderLink2>
        <BorderLink3>Effect three (links)</BorderLink3>
        <BorderLink4>Effect Four (links)</BorderLink4>
      </div>
    </div>
  )
}

export default BorderButtons;