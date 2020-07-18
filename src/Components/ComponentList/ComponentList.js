import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "../Inputs/MuiButton";
import MuiCheckbox from "../Inputs/MuiCheckbox";
import MuiRadioButton from "../Inputs/MuiRadioButton";
// import PropTypes from "prop-types";

const checkboxArr = [{ id: 1, value: "Cat" }, { id: 2, value: "Dog" }];

function ComponentList(props) {
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [radioValue, setRadioValue] = useState(null);

  const onChangeCheckBox = e => {
    const valueAsNumber = Number(e.target.value);
    if (checkboxValue.indexOf(valueAsNumber) > -1) {
      setCheckboxValue(checkboxValue.filter(item => item !== valueAsNumber));
    } else {
      setCheckboxValue([...checkboxValue, Number(valueAsNumber)]);
    }
  };
  const onChangeCheckRadio = e => {
    setRadioValue(Number(e.target.value));
  };

  return (
    <>
      <Typography>These are some compontents</Typography>
      <Grid container>
        <Button>Click me</Button>
        {checkboxArr.map(item => (
          <MuiCheckbox
            handleChange={onChangeCheckBox}
            key={item.id}
            label={item.value}
            value={item.id}
            checked={checkboxValue.indexOf(item.id) > -1}
          />
        ))}
        {checkboxArr.map(item => (
          <MuiRadioButton
            handleChange={onChangeCheckRadio}
            key={item.id}
            label={item.value}
            value={item.id}
            isChecked={radioValue === item.id}
          />
        ))}
      </Grid>
    </>
  );
}

ComponentList.propTypes = {};

export default ComponentList;
