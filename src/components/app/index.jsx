import React from "react";
import { Button } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { connect } from "react-redux";
import Dropzone from "../dropzone";
import PdfView from "../pdfView";
import DropGrid from "../drop-grid";
import PassportFrame from "../passport-frame";
import LabourFrame from "../labour-frame";
import {
  checkboxLabourSelector,
  isLabourFulfilled,
  isPassportFulfilled,
} from "../../selectors";
import { addedFile, verifyLabour } from "../../actions";

const BigBlueButton = withStyles({
  root: {
    color: blue[300],
    border: "4px solid #89cff0",
    height: "60px",
    fontSize: "1.5rem",
    marginTop: "20px",
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

function App({ isFulfilled, passportPdf, passportPhotos, labourCardFiles }) {
  return (
    <div
      style={{
        "max-width": "800px",
        "min-width": "400px",
        margin: "auto",
        width: "80%",
        font: '1.2em Roboto, "Fira Sans", sans-serif',
      }}
    >
      <Container>
        <PassportFrame />
        <LabourFrame />
        <Container>
          <BigBlueButton
            variant="outlined"
            color="primary"
            fullWidth
            disabled={!isFulfilled}
            onClick={() => {
              console.log(
                "--- SUMBIT PRESSED HIP HIP HOORAY and request file goes here",
                {
                  method: "POST",
                  passportPdf,
                  passportPhotos,
                  labourCardFiles,
                }
              );
            }}
          >
            Отправить
          </BigBlueButton>
        </Container>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFulfilled: isLabourFulfilled(state) && isPassportFulfilled(state),
  passportPdf: state.forms.pdfFile,
  passportPhotos: state.forms.passPhotos,
  labourCardFiles: state.forms.labourFiles,
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addedFile(file)),
  doVerify: (bool) => dispatch(verifyLabour(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
