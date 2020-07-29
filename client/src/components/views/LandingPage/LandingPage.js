import React from "react";
import FileForm from "../FIleForm/FileForm";
import { Alert } from "antd";

function LandingPage(props) {
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <FileForm user={props.user} />
      <br />
      <Alert
        message=".csv 파일만 변환가능합니다!"
        description="엑셀파일을 다른 이름으로 저장하여 csv파일로 변환해 주세요"
        type="success"
        showIcon
      />
    </div>
  );
}

export default LandingPage;
