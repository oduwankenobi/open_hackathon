import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

import headerImage from "./header.png";
import logoSvg from "./logo.svg";

const InnerHeader = styled.div`
  color: #fff;
  position: relative;
  height: 320px;
  display: block;

  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 0;
    background: url(${headerImage}) no-repeat;
    background-size: cover;
    background-position: bottom;

    box-sizing: inherit;
    outline: none;
  }

  @media (min-width: 768px) {
    &:before {
      height: 100%;
    }
  }
  @media (max-width: 767px) {
    &:before {
      top: 0;
      height: calc(100% - 150px);
    }
  }
  @media (min-width: 768px) {
    height: 470px;
  }
`;

const Logo = styled.div`
  position: relative;
  float: left;
  width: 280px;
  height: 46px;
  background-image: url(${logoSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0;
  cursor: pointer;

  box-sizing: content-box;
  min-height: 1px;
  padding-left: 15px;
  margin-left: 15px;
  margin-top: 30px;

  @media (max-width: 767px) {
    width: 180px;
    height: 49px;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  line-height: 1.4;
  width: 100%;
  text-align: center;
  margin: auto;
  max-width: 1000px;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px @media (max-width: 767px) {
    position: absolute;
    top: 45px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    top: 90px;
  }

  @media (min-width: 992px) {
    top: 120px;
    font-size: 3.44286rem;
  }
`;

const Lead = styled.div`
  position: relative;
  width: 100%;
  top: 10px;
  font-size: 1.28571rem;
`;

const Title = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 2.14286rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 3.14286rem;
  }

  @media (min-width: 992px) {
    font-size: 3.44286rem;
  }
`;

function Header() {
  return (
    <InnerHeader>
      <div
        style={{
          width: "100%",
        }}
      >
        <Logo />
      </div>
      <TextBlock>
        <Title>
          <h1>Онлайн заявка</h1>
        </Title>
        <Lead>Больше никаких бумаг!</Lead>
      </TextBlock>
    </InnerHeader>
  );
}

export default Header;
