const mongoose = require("mongoose")
const mountainSchema = mongoose.Schema({
    name: {
        type: String,
        validate: {
          validator: function (value) {
            return /^[a-zA-Z]+$/.test(value);
          },
          message: 'Name should contain only alphabets'
        },
        required: [true, 'Name is required']
      },
location:{
    type: String,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: 'Location should contain only alphabets'
    },
    required: [true, 'Location is required']
  },
altitude: {
    type: Number,
    required: [true, 'Altitude is required'],
    min: 0,
    max: 12345678
  },
})
module.exports = mongoose.model("mountains",
mountainSchema)