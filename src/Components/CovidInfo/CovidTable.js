import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import MaterialTable from "material-table";

function CovidTable({ covidInfo }) {
  const columns = [
    { title: "District", field: "district" },
    { title: "Active", field: "active" },
    { title: "Confirmed", field: "confirmed" },
    { title: "Deceased", field: "deceased" },
    { title: "Recovered", field: "recovered" }
  ];

  return (
    <>
      <MaterialTable
        labelRowsPerPage={14}
        data={covidInfo}
        columns={columns}
        title="Covid Cases"
        options={{ paging: false }}
      />
    </>
  );
}

CovidTable.propTypes = {
  covidInfo: PropTypes.shape({
    covidInfo: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

const mapStateToProps = state => ({
  covidInfo: state.covidInfo["covidInfo"]
});

export default connect(mapStateToProps)(CovidTable);
