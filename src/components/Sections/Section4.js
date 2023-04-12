import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Section4.css";

export default function Section4() {
  return (
    <div className="Section4">
      <Container fluid="container-xxl" className="Section4_inner Section4_pd">
        <div className="Section4_container">
          <div className="Section4_top">
            <h2>Approach</h2>
          </div>
          <Row className="Section4_bottom">
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                첫째
                <h3>열정</h3>
              </div>
              <div className="Section4_approach-description">
                <p>텍스트를 입력해 주세요</p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                둘째
                <h3>창의성</h3>
              </div>
              <div className="Section4_approach-description">
                <p>텍스트를 입력해 주세요</p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                셋째
                <h3>성실함</h3>
              </div>
              <div className="Section4_approach-description">
                <p>텍스트를 입력해 주세요</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
