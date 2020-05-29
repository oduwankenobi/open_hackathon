import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateCheckbox } from "../../actions";
import { GreenCheckbox } from "../components-with-styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function PassportFormGroup({ updateStore }) {
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
