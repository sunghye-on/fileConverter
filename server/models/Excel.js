const mongoose = require("mongoose");

const excelSchema = mongoose.Schema(
  {
    originalName: String,
    fileName: String,
    size: String,

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
  },
  { timestamps: true }
);

const Excel = mongoose.model("Excel", excelSchema);

module.exports = { Excel };
