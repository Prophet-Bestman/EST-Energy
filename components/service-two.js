import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";

const ServiceTwo = () => {
  const { sectionContent, posts } = ServicePostTwoData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section className="service_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">What We Do</h4>
            <h2 className="sec_title white">
              This is our corporate responsibility
            </h2>
            <p className="sec_desc color_aaa">
              At EST, we take pride in doing the right thing and striving for
              the highest standards. Not only in our works, but also in related
              issues
            </p>
          </Col>
        </Row>
        <Row>
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12} style={{ height: "100%" }}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;
