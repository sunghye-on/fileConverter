import React from "react";
import FileForm from "../FIleForm/FileForm";
import { Alert } from "antd";

function LandingPage(props) {
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <FileForm />
      <br />
      <Alert
        message="업로드 가능한 파일 목록"
        description="xlsx, cvs, xlsm, xls, xltx, xml"
        type="success"
        showIcon
      />
    </div>
  );
}

export default LandingPage;
