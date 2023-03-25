import { APP_PREFIX } from "../../../constants"
import { useLocalStorage } from "../../../hooks"

const currentFS = localStorage.getItem(`${APP_PREFIX}_fontSize`);

function SettingsFontSize({ setSettingsData }) {
  const [fontSize, setFontSize] = useLocalStorage(`${APP_PREFIX}_fontSize`, 16);
  const setSettingsFS = e => {
    if (e.target.value !== currentFS) {
      setSettingsData((prevData) => ({ ...prevData, diffFontSize: true }));
      setFontSize(() => e.target.value);
    }
  }
  return (
    <div className="d-flex justify-content-between my-2 border-bottom border-1 pb-2">
      <span>Choose your font size</span>
      <input
        type="number"
        name="fontSize"
        value={fontSize}
        onChange={setSettingsFS}
        min={10}
        max={40}
        step={1}
      />
    </div>
  )
}

export default SettingsFontSize;