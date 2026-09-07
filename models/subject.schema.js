const mongoose = require ('mongoose');

const subjectSchema = mongoose.Schema (
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    class: String,
    stream: String,
  },
  {timestamps: true}
);

const Subject = mongoose.model ('Subject', subjectSchema);
module.exports = Subject;
