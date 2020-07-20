import React, { useEffect } from "react";
import { connect } from "react-redux";

// import PropTypes from "prop-types";
import CovidInfo from "./CovidInfo";
import { fetchCovidData } from "../../redux/service/covid-info";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100%",
    padding: 20,
    overflowY: "auto"
  }
});

function CovidInfoLanding({ getCovidData }) {
  const classes = useStyles();
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className={classes.container}>
      <CovidInfo />
    </div>
  );
}

CovidInfoLanding.propTypes = {};

const mapDispatchToProps = dispatch => ({
  getCovidData: () => dispatch(fetchCovidData())
});

export default connect(
  null,
  mapDispatchToProps
)(CovidInfoLanding);
