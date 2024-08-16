const { Schema, model } = require("mongoose")

const deviceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    icon: {
      type: String
    },
    deviceType: {
      type: String,
      enum: [
        'light',
        'thermostat',
      ],
    },
    logicFuction: {
      type: Schema.Types.Mixed,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: 'Area'
    }

  },
  {
    timestamps: true
  }
)

const Device = model("Device", deviceSchema)

module.exports = Device
