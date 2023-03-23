import { connect } from "react-redux";
import { alerts } from "../../actions";

const Alert = ({ alerts, removeAlert }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div
      className={`d-flex gap-4 justify-content-between align-items-center alert alert-${alert.alertType} fade show toast-message`}
      role="alert"
      key={alert.id}
      style={{ pointerEvents: "all", color: "#111" }}
    >
      {alert.msg}
      <button
        type="button"
        onClick={() => removeAlert(alert.id)}
        className="btn close"
        data-dismiss="alert"
        aria-label="Close"
      >
      <span aria-hidden="true">
        <i className="fa-solid fa-times" />
      </span>
    </button>
  </div>
));

const mapStateToProps = state => ({ alerts: state.alert });

export default connect(mapStateToProps, { removeAlert: alerts.removeAlert })(Alert);