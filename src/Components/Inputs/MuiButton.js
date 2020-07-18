import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

function MuiButton({ children, handleClick }) {
  return (
    <>
      <Button color="primary" variant="contained" onClick={handleClick}>
        {children}
      </Button>
    </>
  );
}

MuiButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

MuiButton.defaultProps = {
  handleClick: () => null
};

export default MuiButton;
