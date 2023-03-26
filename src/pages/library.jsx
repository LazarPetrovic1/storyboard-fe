import {
  BorderButtons,
  BoxShadowButtons,
  DropButtons,
  FancyButton,
  ThemedButtons,
  ColourButton,
  VariousButtons,
  CirclingBorderButton
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
      <ColourButton />
      <VariousButtons />
      <CirclingBorderButton /> {/* THIS IS A LINK */}
    </div>
  )
}

export default LibraryPage