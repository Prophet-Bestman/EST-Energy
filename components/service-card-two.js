import React from "react";
import Link from "next/link";

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title, icon, icon2 } = data;
  return (
    // <Link href={url}>
    <div className="icon_box_1 text-center">
      <div className="flipper">
        <div className="front">
          <img width="80px" src={icon} />
          <h3 style={{ marginTop: "12px" }}>{title}</h3>
        </div>
        <div className="back">
          <img width="80px" src={icon2} />
          <h3 style={{ marginTop: "12px" }}>{title}</h3>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ServiceCardTwo;
