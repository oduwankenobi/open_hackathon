import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { blue, green, red } from "@material-ui/core/colors";

import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import {
  checkboxLabourSelector,
  isLabourFulfilledSelector,
} from "../../selectors";
import DropzoneLabour from "../dropzone-labour";
import { addedFile, addLabourFile, verifyLabour } from "../../actions";
import PassportFormGroup from "../passport-form-group";

import LabourFormGroup from "../labour-form-group";

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

const RedClearIcon = withStyles({
  root: {
    color: red[400],
  },
  checked: {},
})((props) => <ClearIcon color="default" {...props} />);

const LargeRedClearIcon = withStyles({
  root: {
    color: red[400],
    "font-size": "48px",
  },
  checked: {},
})((props) => <ClearIcon color="default" {...props} />);

const GreenCheckIcon = withStyles({
  root: {
    color: green[400],
  },
  checked: {},
})((props) => <CheckIcon color="default" {...props} />);

const LargeGreenCheckIcon = withStyles({
  root: {
    color: green[400],
    "font-size": "48px",
  },
  checked: {},
})((props) => <CheckIcon color="default" {...props} />);

const BlueButton = withStyles({
  root: {
    color: blue[300],
    border: "1px dotted transparent",
    borderRadius: 4,
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

class LabourFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hintShow: false,
      passportShow: true,
      animationOut: 0,
      hintSize: "0px",
      pdfAreaStyles: {
        visibility: "hidden",
        height: "0px",
      },
      verify: false,
    };
  }

  handleShowHint = () => {
    this.setState({
      hintShow: !this.state.hintShow,
      animationOut: 1000,
      hintSize: this.state.hintSize === "0px" ? "200px" : "0px",
    });
  };

  handleShowPassport = () => {
    console.log(this.state.hintShow);
    this.setState({
      passportShow: !this.state.passportShow,
      animationOut: 500,
      passportHeight: this.state.passportHeight === "0px" ? "1000px" : "0px",
      verify: true,
    });
    this.props.doVerify(true);
  };

  render() {
    const { fields, isFulfilled, verify } = this.props;

    return (
      <div style={{}}>
        <Container>
          <div
            style={{
              "border-radius": "8px",
              height: this.state.passportShow ? "auto" : "70px",
              "margin-top": "20px",
              border: "1px solid #e5e5e5",
              padding: "10px",
              "padding-bottom": "0px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  "margin-bottom": "10px",
                }}
              >
                {!this.state.passportShow ? (
                  <div>
                    <h2>
                      <span hidden={!isFulfilled}>
                        <LargeGreenCheckIcon />
                      </span>
                      <span hidden={!(this.state.verify && !isFulfilled)}>
                        <LargeRedClearIcon />
                      </span>
                      <span
                        style={{
                          color:
                            this.state.verify && isFulfilled
                              ? "green"
                              : this.state.verify && !isFulfilled
                              ? "red"
                              : "grey",
                        }}
                      >
                        Книжка
                      </span>
                    </h2>
                  </div>
                ) : null}
                <BlueButton
                  variant="outlined"
                  color="primary"
                  onClick={this.handleShowPassport}
                  fullWidth={this.state.passportShow}
                >
                  {!this.state.passportShow
                    ? "Показать"
                    : "Спрятать данные о трудовой книжке"}
                </BlueButton>
              </div>
              <div>
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOutRight"
                  animationInDuration={1000}
                  animationOutDuration={this.state.animationOut}
                  isVisible={this.state.passportShow}
                >
                  <Row>
                    <Col md={8}>
                      <div
                        style={{
                          "border-radius": "8px",
                          "min-height": "200px",
                          background: "#f5f5f5",
                          "box-shadow": "0 6px 6px rgba(0,0,0,0.2)",
                          padding: "15px",
                          "margin-bottom": "10px",
                        }}
                      >
                        <h5>
                          <span hidden={!isFulfilled}>
                            <LargeGreenCheckIcon />
                          </span>
                          <span hidden={!(this.state.verify && !isFulfilled)}>
                            <LargeRedClearIcon />
                          </span>
                          Данные о трудовой книжке
                        </h5>
                        <div
                          style={{
                            "margin-left": "-25px",
                          }}
                        >
                          <LabourFormGroup />
                        </div>
                        <div
                          style={{
                            "margin-top": "10px",
                          }}
                        >
                          <BlueButton
                            variant="outlined"
                            color="primary"
                            onClick={this.handleShowHint}
                            style={{
                              display: "block",
                            }}
                            fullWidth
                          >
                            {this.state.hintShow
                              ? "Спрятать подсказку"
                              : "Показать подсказку"}
                          </BlueButton>
                        </div>
                        <div style={{ height: this.state.hintSize }}>
                          <Animated
                            animationIn="fadeInUp"
                            animationOut="fadeOutRight"
                            animationInDuration={1000}
                            animationOutDuration={this.state.animationOut}
                            isVisible={this.state.hintShow}
                          >
                            <div
                              style={{
                                height: this.state.hintSize,
                              }}
                            >
                              <div
                                style={{
                                  "line-height": "2rem",
                                  display: "flex",
                                }}
                              >
                                <div>
                                  <strong>Видны края</strong> всех страниц
                                  книжки
                                  <br />
                                  Необходимы{" "}
                                  <strong>
                                    все страницы,
                                    <br />с данными
                                  </strong>
                                  <br />
                                  Проверьте качество прикрепляемых документов,
                                  чтобы заявка не вернулась на доработку.
                                </div>
                                <div
                                  style={{
                                    "margin-top": "10px",
                                    "margin-left": "10px",
                                  }}
                                />
                              </div>
                            </div>
                          </Animated>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <DropzoneLabour />
                    </Col>
                  </Row>
                  {/*<Row>*/}
                  {/*  <Col>*/}
                  {/*    <div*/}
                  {/*      style={{*/}
                  {/*        "margin-top": "20px",*/}
                  {/*        "margin-bottom": "15px",*/}
                  {/*        "text-align": "center",*/}
                  {/*        color: "grey",*/}
                  {/*        "font-size": "2rem",*/}
                  {/*      }}*/}
                  {/*    >*/}
                  {/*      Внесите файлы с трудовой книжкой ниже.*/}
                  {/*    </div>*/}
                  {/*  </Col>*/}
                  {/*</Row>*/}
                  {/*<DropzoneLabour />*/}
                </Animated>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  pdfFile: state.forms.pdfFile,
  isFulfilled: isLabourFulfilledSelector(state),
  fields: checkboxLabourSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addLabourFile(file)),
  doVerify: (bool) => dispatch(verifyLabour(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LabourFrame);
