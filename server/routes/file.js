const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Excel } = require("../models/Excel");
const { fileConverter } = require("../middleware/convert");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 엑셀마일만 올리는 부분
    if (!file.originalname.match(/\.(xlsx|cvs|xlsm|xls|xltx|xml)$/)) {
      cb(null, (err = "err"));
    }
    cb(null, "client/public/files/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/upload", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      //일단 파일 정보를 보내기만 하지만 차후 계산된 값을 넣어 보낼예정
      // 일단 python의 print만 찌가어보자
      let data = res.req.file;
      let convertData = fileConverter(data);
      console.log("변환데이터", data);
      return res.json({ success: true, data, convertData });
    }
  });
});

router.get("/file_by_id", async (req, res) => {
  let userId = req.query.id;
  const data = await Excel.find({ userId });
  return res.json({ success: true, data });
});

router.post("/save", (req, res) => {
  if (req.body.userId === undefined) {
    console.log("비회원");
    //바로 진행
  } else {
    // 저장 후 실행
    const excelData = new Excel(req.body);

    // 디비쌓이는것을 막기위한 주석처리
    // excelData.save((err) => {
    //   if (err) {
    //     return res.status(400).json({ success: false, err });
    //   } else {
    //     return res.status(200).json({ success: true });
    //   }
    // });
    return res.status(200).json({ success: true });
  }
});

module.exports = router;
