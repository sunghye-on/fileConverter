import React from "react";
import { Form, Icon } from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";
import { withRouter } from "react-router-dom";

function FileForm(props) {
  const dropHandler = (file) => {
    let fileData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    fileData.append("file", file[0]);
    axios.post(`/api/file/upload`, fileData, config).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        console.log(response.data);
        props.history.push("/result");
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
