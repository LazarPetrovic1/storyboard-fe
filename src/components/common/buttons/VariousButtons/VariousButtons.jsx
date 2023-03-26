import {
  VictoriaButton1,
  VictoriaButton2,
  VictoriaButton3,
  VictoriaButton4,
  SandyButton1,
  SandyButton2,
  SandyButton3,
  SandyButton4,
  GibsonButton1,
  GibsonButton2,
  GibsonButton3,
  GibsonButton4,
  TharButton1,
  TharButton2,
  TharButton3,
  TharButton4,
} from '../../../../styled';

function VariousButtons() {
  return (
    <div className="container">
      <h1 className="mt-5">Various Links</h1>
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Middle-out (colour change)</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6"> <VictoriaButton1 href="#" className="btn btn-sm animated-button victoria-one">45deg</VictoriaButton1> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <VictoriaButton2 href="#" className="btn btn-sm animated-button victoria-two">225deg</VictoriaButton2> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <VictoriaButton3 href="#" className="btn btn-sm animated-button victoria-three">0deg</VictoriaButton3> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <VictoriaButton4 href="#" className="btn btn-sm animated-button victoria-four">180deg</VictoriaButton4> </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mt-5">Middle-out (no colour change)</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6"> <SandyButton1 href="#" className="btn btn-sm animated-button sandy-one">0deg</SandyButton1> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <SandyButton2 href="#" className="btn btn-sm animated-button sandy-two">180deg</SandyButton2> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <SandyButton3 href="#" className="btn btn-sm animated-button sandy-three">45deg</SandyButton3> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <SandyButton4 href="#" className="btn btn-sm animated-button sandy-four">225deg</SandyButton4> </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mt-5">Static effect</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6"> <GibsonButton1 href="#" className="btn btn-sm animated-button gibson-one">225deg</GibsonButton1> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <GibsonButton2 href="#" className="btn btn-sm animated-button gibson-two">45deg</GibsonButton2> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <GibsonButton3 href="#" className="btn btn-sm animated-button gibson-three">180deg</GibsonButton3> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <GibsonButton4 href="#" className="btn btn-sm animated-button gibson-four">0deg</GibsonButton4> </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mt-5">Side swipe</h2>
        </div>
      </div>
      
      <div className="row pb-5">
        <div className="col-md-3 col-sm-3 col-xs-6"> <TharButton1 href="#" className="btn btn-sm animated-button thar-one">Bottom to top</TharButton1> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <TharButton2 href="#" className="btn btn-sm animated-button thar-two">Top to bottom</TharButton2> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <TharButton3 href="#" className="btn btn-sm animated-button thar-three">Left to right</TharButton3> </div>
        <div className="col-md-3 col-sm-3 col-xs-6"> <TharButton4 href="#" className="btn btn-sm animated-button thar-four">Right to left</TharButton4> </div>
      </div>
    </div>
  )
}

export default VariousButtons