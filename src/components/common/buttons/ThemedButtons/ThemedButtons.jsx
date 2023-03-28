import { ThemedButton } from "../../../../styled";

function ThemedButtons() {
  return (
    <section className="pt-2 pb-5">
      <h1 className="mt-2">Themed Buttons</h1>
      <div className="d-flex justify-content-center mt-5">
        <ThemedButton className="blue">ACCEPT</ThemedButton>
        <ThemedButton className="red">REFUSE</ThemedButton>
        <ThemedButton className="white">MORE INFO</ThemedButton>
      </div>
    </section>
  )
}

export default ThemedButtons;