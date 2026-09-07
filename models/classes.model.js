const mongoose = require ('mongoose');

const classSchema = mongoose.Schema (
  {
    class_name: {type: String, required: true},
    grade: {type: Number, required: true},
    section: {type: String, required: true},
    academic_year: {type: String, required: true},
    stream: {type: String, enum: ['Science', 'Commerce', 'Arts', 'General']},
    class_teacher: {type: String},
    subjects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subject'}],
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}],
    room_number: {type: String},
    schedule: {
      type: Map,
      of: [String],
      required: true,
    },
    notes: {type: String},
  },
  {timestamps: true}
);

const Class = mongoose.model ('Class', classSchema);
module.exports = Class;
