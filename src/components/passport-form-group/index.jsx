import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { blue } from "@material-ui/core/colors";
import { connect, useDispatch, useSelector } from "react-redux";

import { addedFile, updateCheckbox } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: blue[200],
    "&$checked": {
      color: blue[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function PassportFormGroup({ updateStore }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [state, setState] = React.useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
  });

  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateStore(newState);
  };

  const { check1, check2, check3, check4, check5, check6 } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Пожалуйста проверьте страницы</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check1}
                onChange={handleChange}
                name="check1"
              />
            }
            label="2-3 страницы"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check2}
                onChange={handleChange}
                name="check2"
              />
            }
            label="4-5 страницы"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check3}
                onChange={handleChange}
                name="check3"
              />
            }
            label="12-13 страницы"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check4}
                onChange={handleChange}
                name="check4"
              />
            }
            label="14-15 страницы"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check5}
                onChange={handleChange}
                name="check5"
              />
            }
            label="16-17 страницы"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={check6}
                onChange={handleChange}
                name="check6"
              />
            }
            label="18-19 страницы"
          />
        </FormGroup>
        <FormHelperText>
          Недостающии страницы можно загрузить в ячейки ниже.
        </FormHelperText>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateStore: (obj) => dispatch(updateCheckbox(obj)),
});

export default connect(null, mapDispatchToProps)(PassportFormGroup);
