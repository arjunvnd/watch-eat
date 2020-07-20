import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import CovidTable from "./CovidTable";
import WithLoading from "../../HOC/WithLoading";

function CovidInfo() {
  return (
    <>
      <CovidTable />
    </>
  );
}

CovidInfo.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.covidInfo.isLoading
});

export default connect(mapStateToProps)(WithLoading(CovidInfo));
