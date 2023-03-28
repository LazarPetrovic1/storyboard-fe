import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { storyTypes } from "../actions/types";
import {
  SettingsFontFamily,
  SettingsFontSize,
  SettingsTheme,
  SettingsChangePassword
} from "../components";
import { BoxShadowButton, ThemedButton } from "../styled";

function Settings() {
  const [settingsData, setSettingsData] = useState(() => ({
    diffTheme: false,
    diffFontSize: false,
    diffFontFamily: false
  }));
  const dispatch = useDispatch()
  const storyLen = useSelector(state => state?.stories?.stories?.length);
  const { diffTheme, diffFontSize, diffFontFamily } = settingsData;
  const isSeeded = useMemo(() => storyLen >= 250, [storyLen])
  const saveSettings = () => {
    const isWindow = typeof window === 'object';
    if (isWindow) window.location.reload(false);
  }
  return (
    <section className="container container-sm border border-2 rounded pt-2 pb-3 ps-4">
      <h1>Settings</h1>
      <SettingsFontFamily setSettingsData={setSettingsData} />
      <SettingsFontSize setSettingsData={setSettingsData} />
      <SettingsTheme setSettingsData={setSettingsData} />
      <SettingsChangePassword />
      {
        (diffTheme || diffFontSize || diffFontFamily) && (
          <BoxShadowButton onClick={saveSettings} className="raise">
            <i className="fa-solid fa-floppy-disk"></i>&nbsp;&nbsp;Save changes
          </BoxShadowButton>
        )
      }
      <div className="d-flex justify-content-between align-items-center my-2 border-bottom border-1 pb-2">
        <span>DBSeed</span>
        <span className={isSeeded ? "text-success" : "text-danger"}>
          {isSeeded ? "Seeded" : "Not seeded"}
        </span>
        <ThemedButton disabled={isSeeded} onClick={() => !isSeeded ? dispatch({ type: storyTypes.SEED_STORIES }) : null} padding="0.5rem 1.5rem" className="blue">SEED</ThemedButton>
      </div>
    </section>
  )
}

export default Settings
