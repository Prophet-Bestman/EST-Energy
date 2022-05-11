import React from "react";

const PageBanner = ({ title, name }) => {
  let bannerClass = "";

  if (name === "About") {
    bannerClass = "aboutBanner";
  }
  if (name === "Services") {
    bannerClass = "servicesBanner";
  }
  if (name === "Contact") {
    bannerClass = "contactBanner";
  }
  if (name === "Portfolio") {
    bannerClass = "portfolioBanner";
  }

  return (
    <section className={`pageBanner ${bannerClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                <a href="/">home</a> - {name}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
