import React from "react";
import { Form, Icon } from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";
import { getRequire } from "../../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function FileForm(props) {
  const dispatch = useDispatch();
  const dropHandler = (file) => {
    if (file.length > 1) {
      alert("파일을 하나만 선택하세요");
      return;
    }
    let fileData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    fileData.append("file", file[0]);
    //진행창이가도록 그이후 결과창
    //유저 정보 같이 넘겨서 디비에 저장하기 다음주
    axios.post(`/api/file/upload`, fileData, config).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        console.log(response.data.data.originalname);
        let temp = response.data.data.filename;
        let docxName = temp.replace(/.(xlsx|cvs|xlsm|xls|xltx|xml)$/, ".docx");
        let body = {
          originalName: response.data.data.originalname,
          fileName: response.data.data.filename,
          convertFileName: docxName,
          size: `${Math.round(response.data.data.size / 1000)}KB`,
          userId: props.user.userData._id,
          userName: props.user.userData.name,
        };
        console.log(body);
        console.log(response.data.convertData);
        // props.history.push("/processing");
        props.history.push("/result");
        // 엑셀파일 우선 저장
        //파일압로드에 성공하면 요청상태를 변경 해주기 위함
        dispatch(getRequire());

        axios.post(`/api/file/save`, body).then((response) => {
          if (response.data.success) {
            console.log("저장");
          } else {
            alert("DB ERROR");
          }
        });
      } else {
        alert("파일 확장자를 확인 해주세요");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form>
        <Dropzone onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <div style={{ textAlign: "center" }}>
                  <Icon type="plus" style={{ fontSize: "3rem" }} />
                  <p>파일을 드래그 하거나 클릭하여 파일 업로드</p>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </Form>
    </div>
  );
}

export default withRouter(FileForm);
