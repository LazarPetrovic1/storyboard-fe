import {
  BorderButtons,
  BorderSpinButtons,
  BoxShadowButtons,
  DropButtons,
  FancyButton,
  ThemedButtons
} from '../components/common/buttons';

function LibraryPage() {
  return (
    <div>
      <BorderButtons />
      <BorderSpinButtons />
      <BoxShadowButtons />
      <DropButtons />
      <FancyButton>Some random text</FancyButton>
      <ThemedButtons />
    </div>
  )
}

export default LibraryPage