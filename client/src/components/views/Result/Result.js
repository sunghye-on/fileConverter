import React from "react";
import { Result, Button } from "antd";

function Success(props) {
  let temp = props.location.state;
  let fileName = temp.split("_");
  console.log(temp);
  return (
    <div style={{ marginTop: "100px" }}>
      {/*
        자동 다운로드 삭제 
      <iframe
        src={`/covtFiles/${props.location.state}`}
        style={{ display: "none" }}
      ></iframe> */}

      <Result
        status="success"
        title="성공적으로 파일을 .docx로 변환 완료했습니다!"
        subTitle="다운로드 버튼을 눌러 변환된 파일을 다운로드를 해보세요."
        extra={[
          <Button type="primary">
            <a href={`/covtFiles/${temp}`} download={`${fileName[1]}`}>
              다운로드
            </a>
          </Button>,

          <Button>
            <a href="/">돌아가기</a>
          </Button>,
        ]}
      />
    </div>
  );
}

export default Success;
