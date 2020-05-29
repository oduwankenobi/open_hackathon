import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { blue, green, grey, red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Checkbox from "@material-ui/core/Checkbox";

export const GreyButton = withStyles({
  root: {
    color: grey[900],
    border: "1px solid black",
    borderRadius: 4,
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

export const RedClearIcon = withStyles({
  root: {
    color: red[400],
  },
  checked: {},
})((props) => <ClearIcon color="default" {...props} />);

export const LargeRedClearIcon = withStyles({
  root: {
    color: red[400],
    "font-size": "48px",
  },
  checked: {},
})((props) => <ClearIcon color="default" {...props} />);

export const GreenCheckIcon = withStyles({
  root: {
    color: green[400],
  },
  checked: {},
})((props) => <CheckIcon color="default" {...props} />);

export const LargeGreenCheckIcon = withStyles({
  root: {
    color: green[400],
    "font-size": "48px",
  },
  checked: {},
})((props) => <CheckIcon color="default" {...props} />);

export const BlueButton = withStyles({
  root: {
    color: blue[300],
    border: "1px dotted transparent",
    borderRadius: 4,
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

export const GreenCheckbox = withStyles({
  root: {
    color: blue[200],
    "&$checked": {
      color: blue[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const SubmitButton = withStyles({
  root: {
    color: blue[300],
    border: "6px solid #89cff0",
    height: "60px",
    fontSize: "1.5rem",
    marginTop: "20px",
    fontWeight: "600",
  },
  checked: {},
})((props) => <Button color="default" {...props} />);
