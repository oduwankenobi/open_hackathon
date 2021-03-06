import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { connect } from "react-redux";
import {
  checkboxIncomeSelector,
  isIncomeFulfilledSelector,
} from "../../selectors";
import DropzoneIncome from "../dropzone-income";
import { addIncomeFile, verifyIncome } from "../../actions";
import IncomeFormGroup from "../income-form-group";
import {
  LargeRedClearIcon,
  BlueButton,
  LargeGreenCheckIcon,
} from "../components-with-styles";

class IncomeFrame extends React.Component {
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
    this.props.doVerify(true);
  };

  render() {
    const { isFulfilled } = this.props;

    return (
      <div>
        <Container>
          <div
            style={{
              border: "1px solid #e5e5e5",
              "border-radius": "8px",
              padding: "10px",
              height: this.state.passportShow ? "auto" : "70px",
              "margin-top": "20px",
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
                              : "black",
                        }}
                      >
                        Справка
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
                    : "Спрятать данные о справке"}
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
                          "box-shadow": "0 6px 6px rgba(0,0,0,0.2)",
                          "min-height": "200px",
                          background: "#f5f5f5",
                          padding: "15px",
                          "margin-bottom": "5px",
                        }}
                      >
                        <h5>
                          <span hidden={!isFulfilled}>
                            <LargeGreenCheckIcon />
                          </span>
                          <span hidden={!(this.state.verify && !isFulfilled)}>
                            <LargeRedClearIcon />
                          </span>
                          Данные справки о доходах
                        </h5>
                        <div
                          style={{
                            "margin-left": "-25px",
                          }}
                        >
                          <IncomeFormGroup />
                        </div>
                        <div
                          style={{
                            "margin-top": "0px",
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
                      <DropzoneIncome />
                    </Col>
                  </Row>
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
  isFulfilled: isIncomeFulfilledSelector(state),
  fields: checkboxIncomeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addIncomeFile(file)),
  doVerify: (bool) => dispatch(verifyIncome(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeFrame);
