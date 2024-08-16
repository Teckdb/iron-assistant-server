const { Schema, model } = require("mongoose")

const areaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      unique: true
    },
    icon: {
      type: String
    },
    floor: {
      type: String
    },
    picture: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Area = model("Area", areaSchema)

module.exports = Area
