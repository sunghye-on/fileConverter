import React, { useState, useEffect } from "react";
import { Progress, Spin } from "antd";

function Processing() {
  const [Percent, setPercent] = useState(0);
  let numberDiff = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let timeDiff = [
    2000,
    1000,
    3000,
    500,
    100,
    600,
    1500,
    1222,
    3000,
    3222,
    3060,
  ];
  const rand = parseInt(Math.random() * 10 - 1);
  useEffect(() => {
    let p = Percent;
    // let rand = parseInt(Math.random() * 12);
    console.log(numberDiff[rand], p);
    if (p >= 100) {
      console.log("done");
    } else {
      setTimeout(async () => {
        p = setPercent((Percent) => Percent + numberDiff[rand]);
        return p;
      }, timeDiff[rand]);
    }
  }, [Percent]);

  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        marginTop: "300px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Spin size="large" tip="변환중..." />
      </div>
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={Percent}
        status="active"
      />
    </div>
  );
}

export default Processing;
