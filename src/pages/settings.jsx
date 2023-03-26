import { useState } from "react"
import {
  SettingsFontFamily,
  SettingsFontSize,
  SettingsTheme,
  SettingsChangePassword
} from "../components";
import { BoxShadowButton } from "../styled";

function Settings() {
  const [settingsData, setSettingsData] = useState(() => ({
    diffTheme: false,
    diffFontSize: false,
    diffFontFamily: false
  }));
  const { diffTheme, diffFontSize, diffFontFamily } = settingsData;
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
    </section>
  )
}

export default Settings
