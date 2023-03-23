import { APP_PREFIX, THEMES } from "../../../constants"
import { useLocalStorage } from "../../../hooks"

function SettingsTheme() {
  const [theme, setTheme] = useLocalStorage(`${APP_PREFIX}_theme`, "dark");
  return (
    <div className="d-flex justify-content-between my-2 border-bottom border-1 pb-2">
      <span>Choose your theme</span>
      <select name="theme" value={theme} onChange={e => setTheme(() => e.target.value)}>
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