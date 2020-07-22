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
            <a>변환파일저장</a>,
          ]}
        >
          <List.Item.Meta
            title={hj}
            description={`크기: ${hj} / 변환날짜: ${hj}`}
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
          <Descriptions title="User Info" bordered style={{ width: "650px" }}>
            <Descriptions.Item label="Name">{hj}</Descriptions.Item>

            <Descriptions.Item label="e-mail" span={2}>
              {hj}
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
