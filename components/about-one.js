import React from "react";
import { AboutOneData } from "@/data";
import About1 from "@/images/about/about1.jpg";
import About2 from "@/images/about/about2.jpg";

const AboutOne = () => {
  const { sectionContent, counter } = AboutOneData;
  return (
    <section className="commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">
              We are a company that Builds on Excellence
            </h2>
          </div>
          <div
            className="col-lg-6 col-sm-12 col-md-6"
            style={{ marginTop: "60px" }}
          >
            <div className="agency_img1">
              <img
                style={{
                  maxWidth: "530px",
                  width: "100%",
                  height: "100%",
                  maxHeight: "464px",
                }}
                src={About1}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="agency_img2">
              <img
                style={{
                  maxWidth: "820px",
                  maxHeight: "444px",
                  width: "100%",
                  height: "100%",
                }}
                src={About2}
                alt=""
              />
            </div>
            <div className="compay_date">
              <h5>{counter.title}</h5>
              <h2>{counter.number}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
