const mongoose = require("mongoose")
const mountainSchema = mongoose.Schema({
name: String,
location: String,
altitude: Number
})
module.exports = mongoose.model("mountains",
mountainSchema)