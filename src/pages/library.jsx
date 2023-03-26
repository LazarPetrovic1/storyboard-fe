import {
  BorderButtons,
  BoxShadowButtons,
  DropButtons,
  FancyButton,
  ThemedButtons,
  ColourButton,
  VariousButtons
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
    </div>
  )
}

export default LibraryPage