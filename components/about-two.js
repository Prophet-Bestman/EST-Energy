import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import About from "@/images/home_1/home-about.webp";

const AboutTwo = () => {
  const { sectionContent, button, gallery } = AboutTwoData;
  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">WHO WE ARE</h4>
            <h2 className="sec_title MB_45">
              A COMPANY THAT IS BUILDING ON EXCELLENCE
            </h2>
            <p className="sec_desc">
              EST Energy Co Ltd (EST) is an electro-mechanical engineering,
              inspection and construction company. Our focus is to provide
              bespoke world-class services to production and major contracting
              companies, including private and government agencies across
              various sectors of the economy, including:{" "}
            </p>
            <a className="common_btn red_bg" href="/portfolio">
              <span>{button.label}</span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img width="100%" src={About} alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
