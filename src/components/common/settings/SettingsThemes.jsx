import { APP_PREFIX, THEMES } from "../../../constants"
import { useLocalStorage } from "../../../hooks"

const currentTheme = localStorage.getItem(`${APP_PREFIX}_theme`);

function SettingsTheme({ setSettingsData }) {
  const [theme, setTheme] = useLocalStorage(`${APP_PREFIX}_theme`, "dark");
  const setSettingsTheme = (e) => {
    if (e.target.value !== currentTheme) {
      setTheme(() => e.target.value);
      setSettingsData((prevData) => ({ ...prevData, diffTheme: true }));
    }
  }
  return (
    <div className="d-flex justify-content-between my-2 border-bottom border-1 pb-2">
      <span>Choose your theme</span>
      <select name="theme" value={theme} onChange={setSettingsTheme}>
        <option disabled defaultValue={null}>-- Please choose a theme --</option>
        {THEMES.map(theme =>
          <option
            key={theme}
            value={theme}
            style={{ textTransform: 'capitalize' }}
          >{theme}</option>
        )}
      </select>
    </div>
  )
}

export default SettingsTheme