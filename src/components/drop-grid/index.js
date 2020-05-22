import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import SmallDropzone from "../small-dropzone";

const Pill = styled.div`
  background: #ffffff;
  border: 1px dashed #53c1f6;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px;
  border-radius: 6px;
  margin: 10px auto;

  max-width: 150px;
  text-align: center;
`;

export default function DropGrip(props) {
  return (
    <Container>
      <div
        style={{
          margin: "auto",
        }}
      >
        <Row>
          <Col sm={4}>
            <div>
              <Pill>2-3 страницы</Pill>
              <SmallDropzone id="1" />
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <Pill>4-5 страницы</Pill>
              <SmallDropzone id="2" />
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <Pill>12-13 страницы</Pill>
              <SmallDropzone id="3" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div>
              <Pill>14-15 страницы</Pill>
              <SmallDropzone id="4" />
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <Pill>16-17 страницы</Pill>
              <SmallDropzone id="5" />
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <Pill>18-19 страницы</Pill>
              <SmallDropzone id="6" />
            </div>
          </Col>
        </Row>
        {/* <Row> */}
        {/*  <Col sm={4}> */}
        {/*    <div> */}
        {/*      <SmallDropzone/> */}
        {/*    </div> */}
        {/*  </Col> */}
        {/*  <Col sm={4}> */}
        {/*    <div> */}
        {/*      <SmallDropzone/> */}
        {/*    </div> */}
        {/*  </Col> */}
        {/*  <Col sm={4}> */}
        {/*    <div> */}
        {/*      <SmallDropzone/> */}
        {/*    </div> */}
        {/*  </Col> */}
        {/* </Row> */}
      </div>
    </Container>
  );
}
