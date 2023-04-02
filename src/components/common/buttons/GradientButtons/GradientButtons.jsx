import {
  Colour1,
  Colour2,
  Colour3,
  Colour4,
  Colour5,
  Colour6,
  Colour7,
  Colour8,
  Colour9,
  Colour10,
  Colour11,
  GridBtnsContainer
} from '../../../../styled';

function GradientButtons() {
  return (
    <div>
      <h1 className='text-center mt-4'>Gradient Buttons</h1>
      <GridBtnsContainer>
        <Colour1 className="btn-hover color-1">BUTTON</Colour1>
        <Colour2 className="btn-hover color-2">BUTTON</Colour2>
        <Colour3 className="btn-hover color-3">BUTTON</Colour3>
        <Colour4 className="btn-hover color-4">BUTTON</Colour4>
        <Colour5 className="btn-hover color-5">BUTTON</Colour5>
        <Colour6 className="btn-hover color-6">BUTTON</Colour6>
        <Colour7 className="btn-hover color-7">BUTTON</Colour7>
        <Colour8 className="btn-hover color-8">BUTTON</Colour8>
        <Colour9 className="btn-hover color-9">BUTTON</Colour9>
        <Colour10 className="btn-hover color-10">BUTTON</Colour10>
        <Colour11 className="btn-hover color-11">BUTTON</Colour11>
      </GridBtnsContainer>
    </div>
  )
}

export default GradientButtons;