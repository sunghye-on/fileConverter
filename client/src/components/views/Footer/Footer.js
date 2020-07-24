import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        sunghyeon {new Date().getFullYear()} <Icon type="copyright" />
      </p>
    </div>
  );
}

export default Footer;
