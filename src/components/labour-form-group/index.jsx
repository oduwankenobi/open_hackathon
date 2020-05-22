import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

import { blue } from "@material-ui/core/colors";
import { connect, useDispatch, useSelector } from "react-redux";

import { addedFile, updateCheckbox, updateCheckboxLabour } from "../../actions";
import { checkboxLabourSelector, isLabourFulfilled } from "../../selectors";

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

function LabourFormGroup({ updateStore, verify, files }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [state, setState] = React.useState({
    check1: false,
    check2: false,
    check3: false,
  });

  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateStore(newState);
  };

  const { check1, check2, check3 } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          Пожалуйста проверьте корректность данных
        </FormLabel>
        <FormGroup>
          <span
            style={{
              color: check1 ? "green" : verify && !check1 ? "red" : "black",
            }}
          >
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={check1}
                  onChange={handleChange}
                  name="check1"
                />
              }
              label="Заверенная работодателем копия"
            />
          </span>
          <span
            style={{
              color: check2 ? "green" : verify && !check2 ? "red" : "black",
            }}
          >
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={check2}
                  onChange={handleChange}
                  name="check2"
                />
              }
              label="Все заполненные страницы трудовой книжки и вкладыша (при наличии)"
            />
          </span>
          <span
            style={{
              color: check3 ? "green" : verify && !check3 ? "red" : "black",
            }}
          >
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={check3}
                  onChange={handleChange}
                  name="check3"
                />
              }
              label="Копия действительна в течение 45 календарных дней c даты заверения"
            />
          </span>

          <span hidden={!(files && !files.length && verify)}>
            <Alert severity="error">
              <AlertTitle>Прикрипите данные</AlertTitle>
              Прикрепить файлы можно <strong>в поле ниже!</strong>
            </Alert>
          </span>
        </FormGroup>
        <FormHelperText />
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => ({
  verify: state.forms.verifyLabour,
  isFulfilled: isLabourFulfilled(state),
  files: state.forms.labourFiles,
});

const mapDispatchToProps = (dispatch) => ({
  updateStore: (obj) => dispatch(updateCheckboxLabour(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LabourFormGroup);
