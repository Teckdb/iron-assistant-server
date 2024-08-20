const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, 'Username is required.']
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User
