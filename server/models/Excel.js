const mongoose = require("mongoose");

const excelSchema = mongoose.Schema(
  {
    fileName: String,
    // excelData: {
    //   type: [{}],
    //   default: undefined,
    // },
    filePath: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Excel = mongoose.model("Excel", excelSchema);

module.exports = { Excel };
