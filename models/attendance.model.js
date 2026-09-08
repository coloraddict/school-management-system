const mongoose = require ('mongoose');

const attendanceSchema = mongoose.Schema (
  {
    student_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    user_type: {
      type: String,
      enum: ['student', 'staff'],
      required: [true, 'User type should be selected'],
    },
    date: {type: Date, required: true},
    status: {
      type: String,
      enum: ['present', 'absent', 'leave'],
      required: true,
    },
    check_in_time: {type: Date},
    check_out_time: {type: Date},
    remarks: {type: String},

    // Student-specific field
    class_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
  },
  {timestamps: true}
);

const Attendance = mongoose.model ('Attendance', attendanceSchema);
module.exports = Attendance;
