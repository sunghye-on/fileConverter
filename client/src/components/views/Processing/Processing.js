import React, { useState, useEffect } from "react";
import { Progress, Spin, Modal, Button, Result } from "antd";
import { useDispatch } from "react-redux";

function Processing(props) {
  const dispatch = useDispatch();

  const [Percent, setPercent] = useState(0);
  const [State, setState] = useState("first");
  const [Visible, setVisible] = useState(false);

  let numberDiff = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let timeDiff = [
    // 2000,
    // 1000,
    // 3000,
    // 500,
    // 100,
    // 600,
    // 1500,
    // 1222,
    // 3000,
    // 3222,
    // 3060,
    100,
  ];
  const rand = parseInt(Math.random() * 10 - 1);

  useEffect(() => {
    let p = Percent;

    if (p >= 100) {
      console.log("done");
      setVisible(true);
      setState("done");
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
      {/* <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={Percent}
        status="active"
      /> */}
      {/* <Modal visible={Visible} footer={null} closable={false}>
        <Result
          style={{ padding: "10px 0" }}
          status="success"
          title="파일변환에 성공했습니다!"
          subTitle="작업완료를 위해 아래 확인 버튼을 눌러주세요"
          extra={
            <a href="/result">
              <Button type="primary">확인</Button>
            </a>
          }
        />
      </Modal> */}
    </div>
  );
}

export default Processing;
