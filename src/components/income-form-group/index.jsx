import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { connect } from "react-redux";
import { updateCheckboxIncome } from "../../actions";
import { isIncomeFulfilledSelector } from "../../selectors";
import { GreenCheckbox } from "../components-with-styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function IncomeFormGroup({ updateStore, verify, files }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    check1: false,
    check2: false,
  });

  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateStore(newState);
  };

  const { check1, check2 } = state;

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
              label="С подписью уполномоченного лица за последние 6 месяцев"
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
              label="Копия действительна в течение 45 календарных дней c даты заверения"
            />
          </span>

          <FormHelperText>
            Если стаж на текущем месте работы меньше полугода, но более 3
            месяцев, справка предоставляется за фактически отработанное время.
          </FormHelperText>

          <div
            hidden={!(files && !files.length && verify)}
            style={{
              "margin-bottom": "5px",
            }}
          >
            <Alert
              severity="error"
              style={{
                "margin-top": "5px",
              }}
            >
              <AlertTitle>Прикрипите данные</AlertTitle>
              Прикрепить файлы можно <strong>в поле ниже!</strong>
            </Alert>
          </div>
          <div hidden={!(verify && !state.check1 && !state.check2)}>
            <Alert
              severity="error"
              style={{
                "margin-top": "5px",
              }}
            >
              <AlertTitle>Подтвердите корректность данных</AlertTitle>
              Поставьте галочки во <strong>всех</strong> полях выше.
            </Alert>
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => ({
  verify: state.forms.verifyIncome,
  isFulfilled: isIncomeFulfilledSelector(state),
  files: state.forms.incomeFiles,
});

const mapDispatchToProps = (dispatch) => ({
  updateStore: (obj) => dispatch(updateCheckboxIncome(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeFormGroup);
