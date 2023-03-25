import { APP_PREFIX, INITIAL_FONT_FAMILY_VALUE, WEB_SAFE_FONTS } from "../../../constants"
import { useLocalStorage } from "../../../hooks"

const currentFF = localStorage.getItem(`${APP_PREFIX}_fontFamily`);

function SettingsFontFamily({ setSettingsData }) {
  const [fontFamily, setFontFamily] = useLocalStorage(`${APP_PREFIX}_fontFamily`, INITIAL_FONT_FAMILY_VALUE);
  const setSettingsFF = e => {
    if (e.target.value !== currentFF) {
      setFontFamily(() => e.target.value);
      setSettingsData((prevData) => ({ ...prevData, diffFontFamily: true }));
    }
  }
  return (
    <div className="d-flex justify-content-between my-2 border-bottom border-1 pb-2">
      <span>Choose your font</span>
      <select name="fontFamily" value={fontFamily} onChange={setSettingsFF}>
        {WEB_SAFE_FONTS.map(wsf => <option style={{ fontFamily: wsf }} key={wsf} value={wsf}>{wsf.split(",")[0]}</option>)}
      </select>
    </div>
  )
}

export default SettingsFontFamily;