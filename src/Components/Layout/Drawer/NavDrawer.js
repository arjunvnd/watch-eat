import React from "react";
import PropTypes from "prop-types";
import { SwipeableDrawer, List, ListItem } from "@material-ui/core";
import history from "../../../utils/history";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Components", link: "/" },
  { id: 3, name: "Components (red)", link: "/components/red" },
  { id: 4, name: "Components (green)", link: "/components/green" }
];

function NavDrawer({ isOpen, onClose }) {
  const handleClick = linkTo => {
    history.push(linkTo);
  };
  console.log(history);
  return (
    <SwipeableDrawer open={isOpen} onClose={onClose}>
      <List>
        {pages.map(page => (
          <ListItem onClick={() => handleClick(page.link)} button key={page.id}>
            {page.name}
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
}

NavDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NavDrawer;
