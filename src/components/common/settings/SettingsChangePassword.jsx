import { Link } from "react-router-dom";

function SettingsChangePassword() {
  return (
    <div className="d-flex justify-content-end mt-4 pb-2">
      <Link to="/change-password" style={{ gap: '0.5rem' }} className="btn btn-primary d-flex align-items-center">
        <i className="fa-solid fa-key" /> <span>Change password</span>
      </Link>
    </div>
  )
}

export default SettingsChangePassword;