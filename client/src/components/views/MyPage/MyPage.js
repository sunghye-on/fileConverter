import React, { useEffect, useState } from "react";
import axios from "axios";
import { Descriptions, Spin, Skeleton, List, BackTop, Button } from "antd";
import { Link } from "react-router-dom";

function MyPage(props) {
  const userId = props.match.params.userId;
  const [FileData, setFileData] = useState();
  useEffect(() => {
    axios
      .get(`/api/file/file_by_id?id=${userId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          // fileData = response.data;
          setFileData(response.data);
        } else {
          // 실패
          alert("데이터 가져오는데 실패했습니다.");
          props.history.push("/");
        }
      });
  }, []);
  console.log(FileData);
  const style = {
    height: 40,
    width: 65,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };
  const hj = "정현정";

  const renderList = () =>
    FileData.data.map((file) => (
      <div key={file._id}>
        <List.Item
          actions={[
            <Link
              to={`/files/${file.fileName}`}
              target="_blank"
              download={file.originalName}
            >
              원본파일저장
            </Link>,
            <Link
              to={`/covtFiles/${file.convertFileName}`}
              target="_blank"
              download={file.originalName.replace(
                /.(xlsx|cvs|xlsm|xls|xltx|xml)$/,
                ".docx"
              )}
            >
              변환파일저장
            </Link>,
          ]}
        >
          <List.Item.Meta
            title={file.originalName}
            description={`크기: ${
              file.size
            } / 변환날짜: ${file.createdAt.substr(0, 10)}`}
          />
        </List.Item>
      </div>
    ));
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        paddingTop: "100px",
      }}
    >
      {props.user.userData !== undefined && FileData !== undefined ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <img
            src={props.user.userData.image}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          />
          <br />
          <Descriptions title="내정보" bordered style={{ width: "650px" }}>
            <Descriptions.Item label="이름">
              {props.user.userData.name}
            </Descriptions.Item>

            <Descriptions.Item label="Email" span={2}>
              {props.user.userData.email}
            </Descriptions.Item>
          </Descriptions>
          <br />
          <br />
          <List itemLayout="horizontal">{renderList()}</List>
          <BackTop>
            <div style={style}>위로가기</div>
          </BackTop>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Spin size="large" />
          <br />
          <Descriptions title="User Info" bordered style={{ width: "650px" }}>
            <Descriptions.Item label="Name">
              <Spin size="small" />
            </Descriptions.Item>

            <Descriptions.Item label="e-mail" span={2}>
              <Spin size="small" />
            </Descriptions.Item>
          </Descriptions>
          <br />
          <br />
          <List itemLayout="vertical" size="large">
            <List.Item>
              <Skeleton active />
            </List.Item>
            <List.Item>
              <Skeleton active />
            </List.Item>
          </List>
        </div>
      )}
    </div>
  );
}

export default MyPage;
