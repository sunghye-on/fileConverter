const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Excel } = require("../models/Excel");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 엑셀마일만 올리는 부분
    if (!file.originalname.match(/\.(xlsx|cvs|xlsm|xls|xltx|xml)$/)) {
      cb(null, (err = "err"));
    }
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/upload", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      //일단 파일 정보를 보내기만 하지만 차후 계산된 값을 넣어 보낼예정
      return res.json({ success: true, data: res.req.file });
    }
  });
});

router.post("/save", async (req, res) => {
  if (req.body.userId === undefined) {
    console.log("비회원");
    //바로 진행
  } else {
    // 저장 후 실행
    const excelData = new Excel(req.body);
    // console.log(excelData);

    // 디비쌓이는것을 막기위함
    // excelData.save((err) => {
    //   if (err) {
    //     return res.status(400).json({ success: false, err });
    //   } else {
    //     return res.status(200).json({ success: true });
    //   }
    // });
    return res.status(200).json({ success: true });
  }
  // console.log("save", req.body);
});

module.exports = router;
