import { APP_PREFIX } from "../../../constants"
import { useLocalStorage } from "../../../hooks"

function SettingsFontSize() {
  const [fontSize, setFontSize] = useLocalStorage(`${APP_PREFIX}_fontSize`, 16);
  return (
    <div className="d-flex justify-content-between my-2 border-bottom border-1 pb-2">
      <span>Choose your font size</span>
      <input
        type="number"
        name="fontSize"
        value={fontSize}
        onChange={e => setFontSize(e.target.value)}
        min={10}
        max={40}
        step={1}
      />
    </div>
  )
}

export default SettingsFontSize;