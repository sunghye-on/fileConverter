const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 엑셀마일만 올리는 부분
    if (!file.originalname.match(/\.(xlsx|cvs|xlsm|xls|xltx|xml)$/)) {
      return;
    }
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/upload", (req, res) => {
  console.log(res.req.file);
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      //일단 파일 정보를 보내기만 하지만 차후 계산된 값을 넣어 보낼예정
      return res.json({ success: true, data: res.req.file });
    }
  });
});

module.exports = router;
