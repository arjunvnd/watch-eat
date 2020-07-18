import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox } from "@material-ui/core";

function MuiCheckbox({ handleChange, checked, label, value }) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name={label}
            value={value}
            color="primary"
          />
        }
        label={label}
      />
    </div>
  );
}

MuiCheckbox.propTypes = {
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

MuiCheckbox.defaultProps = {
  checked: false,
  handleChange: () => null
};

export default MuiCheckbox;
