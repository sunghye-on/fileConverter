const { PythonShell } = require("python-shell");
PythonShell.defaultOptions = {
  scriptPath: "server/pythonScript",
};

let fileConverter = (data) => {
  console.log(data);
  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    encoding: "utf8",
    args: ["value1", "value2", "value3"],
    encoding: "utf8",
  };

  PythonShell.run("test.py", options, function (err, data) {
    if (err) throw err;
    console.log("파일 변환결과 ", data);
  });
};

module.exports = { fileConverter };
