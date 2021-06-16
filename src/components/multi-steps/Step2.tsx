import React from "react";
import PropTypes from "prop-types";

const Step2 = ({
  receiveUpdate,
  handleChange,
  receiveCommunication,
}: {
  receiveUpdate: boolean;
  handleChange: any;
  receiveCommunication: boolean;
}) => {
  return (
    <>
      <div>
        <input
          id="receiveUpdate"
          name="receiveUpdate"
          type="checkbox"
          checked={receiveUpdate}
          onChange={handleChange}
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
          checked={receiveCommunication}
          onChange={handleChange}
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
