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
  name: {
    type: String,
    required: [true, 'Name is required'],
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
  address: addressSchema,
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
});

const User = mongoose.model ('User', userSchema);
module.exports = User;
