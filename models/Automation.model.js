const { Schema, model } = require("mongoose")

const automationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    icon: {
      type: String
    },
    devices: [{
      type: Schema.Types.ObjectId,
      ref: 'Device'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    picture: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Owner'
    }
  },
  {
    timestamps: true
  }
)

const Automation = model("Automation", automationSchema)

module.exports = Automation
