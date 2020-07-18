import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio } from "@material-ui/core";

function MuiRadioButton({
  labelPlacement,
  label,
  value,
  handleChange,
  isChecked
}) {
  return (
    <>
      <FormControlLabel
        value={value}
        control={<Radio checked={isChecked} color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
        onChange={handleChange}
      />
    </>
  );
}

MuiRadioButton.propTypes = {
  labelPlacement: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
  isChecked: PropTypes.bool
};

MuiRadioButton.defaultProps = {
  isChecked: false,
  handleChange: () => null,
  labelPlacement: "end"
};

export default MuiRadioButton;
