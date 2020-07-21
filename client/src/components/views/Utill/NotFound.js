import React from "react";
import { Result, Button } from "antd";

function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="잘못된 페이지 접근입니다."
        extra={
          <Button type="primary">
            <a href="/">돌아가기</a>
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
