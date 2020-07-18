import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "../Drawer/NavDrawer";

function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <NavDrawer isOpen={isDrawerOpen} onClose={onCloseDrawer} />
      <AppBar>
        <Toolbar>
          <IconButton onClick={openDrawer}>
            <MenuIcon htmlColor="#ffffff" />
          </IconButton>
          <Typography variant="h6">Watch!Eat</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
