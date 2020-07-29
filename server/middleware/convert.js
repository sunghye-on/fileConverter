const { PythonShell } = require("python-shell");
PythonShell.defaultOptions = {
  scriptPath: "server/pythonScript",
};

let fileConverter = async (data) => {
  console.log(data);
  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    encoding: "utf8",
    args: [data.originalname, data.filename],
  };

  PythonShell.run("convert.py", options, function (err, data) {
    if (err) throw err;
    else {
      console.log("파일 변환결과 ", data);
      return data;
    }
  });
};

module.exports = { fileConverter };
