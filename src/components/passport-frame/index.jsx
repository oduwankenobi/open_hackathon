import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { connect } from "react-redux";
import Dropzone from "../dropzone";
import PdfView from "../pdfView";
import DropGrid from "../drop-grid";
import PassportFormGroup from "../passport-form-group";
import { addedFile } from "../../actions";
import { isPassportFulfilledSelector, passFieldsStatus } from "../../selectors";
import {
  LargeRedClearIcon,
  GreenCheckIcon,
  RedClearIcon,
  BlueButton,
  LargeGreenCheckIcon,
} from "../components-with-styles";

import pass from "./pass.png";

class PassportFrame extends React.Component {
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
    this.setState({
      passportShow: !this.state.passportShow,
      animationOut: 500,
      passportHeight: this.state.passportHeight === "0px" ? "1000px" : "0px",
      verify: true,
    });
  };

  render() {
    const { fields, isFulfilled, pdfFile } = this.props;
    const verify = this.props.verify || this.state.verify;

    return (
      <Container>
        <div
          className=""
          style={{
            "box-sizing": "content-box",
            "border-radius": "8px",
            height: this.state.passportShow ? "auto" : "auto",
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
                <h3>
                  <span hidden={!isFulfilled}>
                    <LargeGreenCheckIcon />
                  </span>
                  <span hidden={!(verify && !isFulfilled)}>
                    <LargeRedClearIcon />
                  </span>

                  <span
                    style={{
                      color:
                        verify && isFulfilled
                          ? "green"
                          : verify && !isFulfilled
                          ? "red"
                          : "black",
                    }}
                  >
                    Паспорт
                  </span>
                </h3>
              ) : null}
              <BlueButton
                variant="outlined"
                color="primary"
                onClick={this.handleShowPassport}
                fullWidth={this.state.passportShow}
              >
                {!this.state.passportShow
                  ? "Показать"
                  : "Спрятать данные о паспорте"}
              </BlueButton>
            </div>
            <div hidden={!this.state.passportShow}>
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
                        border: "1px solid transparent",
                        "border-radius": "8px",
                        "min-height": "200px",
                        padding: "15px",
                        "box-shadow": "0 6px 6px rgba(0,0,0,0.2)",
                        "background-color": "#f5f5f5",
                        "margin-bottom": "10px",
                      }}
                    >
                      <h5>
                        <span hidden={!isFulfilled}>
                          <LargeGreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !isFulfilled)}>
                          <LargeRedClearIcon />
                        </span>
                        Данные паспорта
                      </h5>
                      <div
                        style={{
                          color: "grey",
                        }}
                      >
                        Обязательные страницы: <br />
                        <br />
                        <span hidden={!fields.field1}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field1)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field1
                              ? "green"
                              : verify && !fields.field1
                              ? "red"
                              : "grey",
                          }}
                        >
                          2-3 - разворот с фотографией,
                        </span>
                        <br />
                        <span hidden={!fields.field2}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field2)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field2
                              ? "green"
                              : verify && !fields.field2
                              ? "red"
                              : "grey",
                          }}
                        >
                          4-5 - место жительства (адрес регистрации),
                        </span>
                        <br />
                        <span hidden={!fields.field3}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field3)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field3
                              ? "green"
                              : verify && !fields.field3
                              ? "red"
                              : "grey",
                          }}
                        >
                          12-13 - воинская обязанность,
                        </span>
                        <br />
                        <span hidden={!fields.field4}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field4)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field4
                              ? "green"
                              : verify && !fields.field4
                              ? "red"
                              : "grey",
                          }}
                        >
                          14-15 - семейное положение,
                        </span>
                        <br />
                        <span hidden={!fields.field5}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field5)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field5
                              ? "green"
                              : verify && !fields.field5
                              ? "red"
                              : "grey",
                          }}
                        >
                          16-17 - дети,
                        </span>
                        <br />
                        <span hidden={!fields.field6}>
                          <GreenCheckIcon />
                        </span>
                        <span hidden={!(verify && !fields.field6)}>
                          <RedClearIcon />
                        </span>
                        <span
                          style={{
                            color: fields.field6
                              ? "green"
                              : verify && !fields.field6
                              ? "red"
                              : "grey",
                          }}
                        >
                          18-19 - сведения о ранее выданном паспорте
                        </span>
                        <br />
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
                      <div
                        style={{
                          height: this.state.hintSize,
                        }}
                      >
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
                                паспорта
                                <br />
                                Необходимы{" "}
                                <strong>
                                  все страницы, <br />
                                  даже пустые
                                </strong>
                              </div>
                              <div
                                style={{
                                  "margin-top": "10px",
                                  "margin-left": "10px",
                                }}
                              >
                                <img src={pass} width="140px" />
                              </div>
                            </div>
                          </div>
                        </Animated>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <Dropzone />
                  </Col>
                </Row>
                <div
                  style={{
                    visibility: !this.props.pdfFile ? "hidden" : "",
                    height: !this.props.pdfFile ? "0px" : "",
                    margin: "30px auto",
                  }}
                >
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          "border-radius": "8px",
                          "box-shadow": "0 6px 6px rgba(0,0,0,0.2)",
                          "margin-bottom": "25px",
                          overflow: "hidden",
                        }}
                      >
                        <PassportFormGroup />
                      </div>
                    </Col>
                    <Col md={8}>
                      <div
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <PdfView />
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <div
                    style={{
                      margin: "0px 30px",
                      "margin-top": pdfFile ? "0px" : "-50px",
                      "margin-bottom": "10px",
                    }}
                  >
                    <h5
                      style={{
                        color: "grey",
                        "text-align": "center",
                      }}
                    >
                      Внесите фотографии паспорта по страницам ниже, или
                      загрузите .pdf в форму выше.
                    </h5>
                  </div>
                </Row>
                <DropGrid />
              </Animated>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  pdfFile: state.forms.pdfFile,
  isFulfilled: isPassportFulfilledSelector(state),
  fields: passFieldsStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addedFile(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PassportFrame);
