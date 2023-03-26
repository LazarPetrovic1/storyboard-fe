import { GibsonButton2 } from "../../../styled";

function SettingsChangePassword() {
  return (
    <div className="d-flex justify-content-end mt-4 pb-2">
      <GibsonButton2 to="/change-password" style={{ gap: '0.5rem' }} className="d-flex align-items-center">
        <i className="fa-solid fa-key" /> <span>Change password</span>
      </GibsonButton2>
    </div>
  )
}

export default SettingsChangePassword;