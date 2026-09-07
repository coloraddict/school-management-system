const mongoose = require ('mongoose');

const academicInfoSchema = mongoose.Schema ({
  roll_number: {
    type: String,
    required: true,
  },
  admission_number: {
    type: String,
    unique: true,
    required: true,
  },
  class: String,
  section: String,
  academic_year: String,
  stream: String,
  subjects: [String],
});

const guardianInfoSchema = mongoose.Schema ({
  father_name: String,
  mother_name: String,
  guardian_name: String,
  guardian_phone: String,
  guardian_email: String,
  guardian_address: String,
});

const administrativeSchema = mongoose.Schema ({
  admission_date: Date,
  status: {
    type: String,
    enum: ['Active', 'Transferred', 'Alumni', 'Suspended'],
    default: 'Active',
  },
});

const metadataSchema = mongoose.Schema ({
  blood_group: String,
  medical_conditions: [String],
  transport_details: {
    bus_route: String,
    pickup_point: String,
  },
  hostel_details: {
    room_number: String,
    warden_name: String,
  },
  notes: String,
});

const studentSchema = mongoose.Schema (
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: Date,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // allows nulls
    },
    phone_number: String,
    address: String,
    profile_picture_url: String,
    academicInfo: academicInfoSchema,
    guardianInfo: guardianInfoSchema,
    administrativeInfo: administrativeSchema,
    metadata: metadataSchema,
  },
  {timestamps: true}
);

const Student = mongoose.model ('Student', studentSchema);
module.exports = Student;
