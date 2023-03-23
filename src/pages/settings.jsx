import {
  SettingsFontFamily,
  SettingsFontSize,
  SettingsTheme,
  SettingsChangePassword
} from "../components"

function Settings() {
  return (
    <section className="container container-sm border border-2 rounded pt-2 pb-3 ps-4">
      <h1>Settings</h1>
      <SettingsFontFamily />
      <SettingsFontSize />
      <SettingsTheme />
      <SettingsChangePassword />
    </section>
  )
}

export default Settings
