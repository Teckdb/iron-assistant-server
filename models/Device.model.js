const { Schema, model } = require("mongoose")

const deviceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      unique: true
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
    brightness: {
      type: Number,
      min: 0,
      max: 100,
      required: function () {
        return this.deviceType === 'light';
      }
    },
    temperature: {
      type: Number,
      required: function () {
        return this.deviceType === 'thermostat';
      }
    },
    logicFuction: {
      type: Schema.Types.Mixed,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: 'Area'
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

deviceSchema.pre('save', function (next) {
  if (this.deviceType === 'light' && this.brightness === undefined) {
    return next(new Error('Brightness is required for lights.'));
  }

  if (this.deviceType === 'thermostat' && this.temperature === undefined) {
    return next(new Error('Temperature is required for thermostats.'));
  }

  next();
});

const Device = model("Device", deviceSchema)

module.exports = Device
