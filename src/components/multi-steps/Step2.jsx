import React from "react";
import PropTypes from "prop-types";

const Step2 = (props) => {
  return (
    <>
      <div>
        <input
          id="receiveUpdate"
          name="receiveUpdate"
          type="checkbox"
          checked={props.receiveUpdate}
          onChange={props.handleChange}
        />
        <label htmlFor="receiveUpdate">
          Receive update about Tray.io product by email
        </label>
      </div>
      <div>
        <input
          id="receiveCommunication"
          name="receiveCommunication"
          type="checkbox"
          checked={props.receiveCommunication}
          onChange={props.handleChange}
        />
        <label htmlFor="receiveCommunication">
          Receive communication by email
        </label>
      </div>
    </>
  );
};

Step2.propTypes = {
  receiveUpdate: PropTypes.bool.isRequired,
  receiveCommunication: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Step2;
