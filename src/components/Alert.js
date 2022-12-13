import React from "react";

function Alert(props) {
  if (!props.alert) {
    return "";
  }
  return (
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.Type}</strong>:{props.alert.Msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
export default Alert;
