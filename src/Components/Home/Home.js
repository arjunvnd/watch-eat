import React, { useEffect } from "react";
import { connect } from "react-redux";

import HomeGrid from "./subcomponents/HomeGridLayout";
import { fetchPokemonList } from "../../redux/service/home";
// import PropTypes from "prop-types";

function Home({ getPokemon }) {
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      <HomeGrid />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getPokemon: () => dispatch(fetchPokemonList())
});

Home.propTypes = {};

export default connect(
  null,
  mapDispatchToProps
)(Home);
