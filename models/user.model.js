const mongoose = require ('mongoose');

const addressSchema = mongoose.Schema ({
  street: {
    type: String,
    required: [true, 'City is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  zipcode: {
    type: String,
    required: [true, 'Zipcode is required'],
  },
});

const userSchema = new mongoose.Schema ({
  first_name: {
    type: String,
    required: [true, 'First name is required'],
  },
  last_name: {
    type: String,
    required: [true, 'Last name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  address: addressSchema,
  phone_number: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  profile_picture: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
  },
  designation: {
    type: [String],
  },
  permissions: {
    type: String,
  },
  department: {
    type: String,
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
  },
  notes: {
    type: String,
  },
  is_email_verified: {
    type: Boolean,
    default: false,
  },
  is_phone_verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now (),
    select: false,
  },
  updated_at: {
    type: Date,
  },
  created_by: {
    type: String,
  },
  updated_by: {
    type: String,
  },
});

const User = mongoose.model ('User', userSchema);
module.exports = User;
