import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ParallaxOneData } from "@/data";

const ParallaxOne = () => {
  const { iconName, title, specialText, text } = ParallaxOneData;
  return (
    <section className="commonSection testimonial">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} sm={12} className="text-center">
            <div className="testimonial_content">
              {/* <div className="testi_icon">
                <i className={iconName}></i>
              </div> */}
              <h2>
                {
                  "Our vision is to be the foremost integrated service company in Africa,"
                }
                <span>
                  {
                    "providing the ‘next generation’ solutions to our customers, whilst remaining responsible corporate citizens"
                  }
                </span>
              </h2>
              <p>
                {
                  "At EST, we take pride in doing the right thing and striving for the highest standards. Not only in our works, but also in related issues"
                }
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ParallaxOne;
