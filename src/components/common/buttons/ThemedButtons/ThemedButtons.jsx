import './ThemedButtons.css'

function ThemedButtons() {
  return (
    <section className="pt-2 pb-5">
      <h1 className="mt-2">Themed Buttons</h1>
      <div className="flex-grid-center">
        <div className="pure-button fuller-button blue">ACCEPT</div>
        <div className="pure-button fuller-button red">REFUSE</div>
        <div className="pure-button fuller-button white">MORE INFO</div>
      </div>
    </section>
  )
}

export default ThemedButtons;