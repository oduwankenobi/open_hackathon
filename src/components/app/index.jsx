import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { connect } from "react-redux";
import { Alert } from "@material-ui/lab";
import PassportFrame from "../passport-frame";
import LabourFrame from "../labour-frame";
import IncomeFrame from "../income-frame";

import {
  isFormsFulfilledSelector,
  isIncomeFulfilledSelector,
  isLabourFulfilledSelector,
  isPassportFulfilledSelector,
} from "../../selectors";
import { addedFile, verifyLabour } from "../../actions";
import Header from "../header";

import styled from "styled-components";

const BigBlueButton = withStyles({
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

const Main = styled.div`
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 -5px 30px -10px rgba(0, 0, 0, 0.75);

  margin-right: auto;
  margin-left: auto;

  border-radius: 8px;

  padding: 0 15px;

  &:before {
    content: " ";
    display: table;
  }

  @media (max-width: 767px) {
    margin-top: -160px;
    box-shadow: 0 -5px 30px -10px rgba(0, 0, 0, 0);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: -180px;
  }

  @media (min-width: 992px) {
    margin-top: -160px;
    width: 980px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 720px;
  }
`;

function App({
  isFulfilled,
  isPassportFulfilled,
  isLabourFulfilled,
  isIncomeFulfilled,
  passportPdf,
  passportPhotos,
  labourCardFiles,
}) {
  const [isSubmitSend, setIsSubmitSend] = useState(null);
  const [isErrorShowed, setIsErrorShowed] = useState(null);

  const handleSubmit = () => {
    if (isFulfilled) {
      console.log(
        "--- SUMBIT PRESSED HIP HIP HOORAY and request file goes here",
        {
          method: "POST",
          passportPdf,
          passportPhotos,
          labourCardFiles,
        }
      );
      setIsSubmitSend(true);
      setIsErrorShowed(null);
    } else {
      setIsErrorShowed(true);
    }
  };

  return (
    <div>
      <Header />
      <Main>
        <div
          style={{
            margin: "auto",
            "font-family":
              '-apple-system,BlinkMacSystemFont, "Open Sans", "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
            "padding-bottom": "50px",
          }}
        >
          <Container>
            <div
              style={{
                "margin-top": "20px",
              }}
            >
              <h2>Документы</h2>
            </div>
            <Alert
              severity="warning"
              style={{
                "margin-top": "20px",
              }}
            >
              Проверьте качество прикрепляемых документов, чтобы заявка не
              вернулась на доработку. Документы должны быть читаемы, не
              обрезаны, не засвечены. Допустимые форматы файлов - jpg, png,
              tiff, pdf
            </Alert>
            <PassportFrame />
            <LabourFrame />
            <IncomeFrame />
            <Container>
              <Col>
                <div
                  style={{
                    "margin-top": "25px",
                  }}
                >
                  {isErrorShowed && !isPassportFulfilled && (
                    <Alert
                      severity="error"
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      Заполните паспортные данные до конца!
                    </Alert>
                  )}
                  {isErrorShowed && !isLabourFulfilled && (
                    <Alert
                      severity="error"
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      Заполните данные трудовой книжки до конца!
                    </Alert>
                  )}
                  {isErrorShowed && !isIncomeFulfilled && (
                    <Alert
                      severity="error"
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      Заполните данные по справке о доходах до конца!
                    </Alert>
                  )}
                  {isSubmitSend && (
                    <Alert
                      severity="success"
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      Спасибо! Ваши данные отправлены!
                    </Alert>
                  )}
                </div>
              </Col>
              <Col>
                <BigBlueButton
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Отправить
                </BigBlueButton>
              </Col>
            </Container>
          </Container>
        </div>
      </Main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isPassportFulfilled: isPassportFulfilledSelector(state),
  isLabourFulfilled: isLabourFulfilledSelector(state),
  isIncomeFulfilled: isIncomeFulfilledSelector(state),
  isFulfilled: isFormsFulfilledSelector(state),
  passportPdf: state.forms.pdfFile,
  passportPhotos: state.forms.passPhotos,
  labourCardFiles: state.forms.labourFiles,
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addedFile(file)),
  doVerify: (bool) => dispatch(verifyLabour(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
