import {
  BorderButtons,
  BoxShadowButtons,
  DropButtons,
  FancyButton,
  ThemedButtons,
  ColourButton,
  VariousButtons,
  CirclingBorderButton,
  CirclingBorderLink,
  GradientButtons
} from '../components/common/buttons';

function LibraryPage() {
  return (
    <div>
      <BorderButtons />
      <BoxShadowButtons />
      <DropButtons />
      <FancyButton>Some random text</FancyButton>
      <ThemedButtons />
      <h1>Colour Button</h1>
      <ColourButton>Draw Border</ColourButton>
      <VariousButtons />
      <h1>Circling Border Button</h1>
      <CirclingBorderButton>Circling border link</CirclingBorderButton> {/* THIS IS A LINK */}
      <h1>Circling Border Link</h1>
      <CirclingBorderLink>Circling border button</CirclingBorderLink> {/* THIS IS A LINK */}
      <GradientButtons />
    </div>
  )
}

export default LibraryPage