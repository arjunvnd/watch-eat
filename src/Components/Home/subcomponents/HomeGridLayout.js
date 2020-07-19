import React, { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import InfoCard from "./InfoCard";
import { fetchPokemonList } from "../../../redux/service/home";
import WithLoading from "../../../HOC/WithLoading";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  spacingHelper: {
    height: "100%",
    padding: "8px"
  },
  root: {
    padding: 20,
    overflowY: "auto",
    height: "100%"
  }
});

function HomeGrid({ pokemonList }) {
  const classes = useStyles();
  return (
    <div className={classes.spacingHelper}>
      <Grid className={classes.root} spacing={2} container>
        {pokemonList.pokemon.map(_item => (
          <Grid key={_item.id} item xs={12} md={4} lg={3} xl={3}>
            <InfoCard title={_item.name} image={_item.image.data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

HomeGrid.propTypes = {};

const mapStateToProps = state => ({
  isLoading: state.pokemonList.isLoading,
  pokemonList: state.pokemonList
});

const mapDispatchToProps = dispatch => ({
  getPokemon: () => dispatch(fetchPokemonList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(HomeGrid));
