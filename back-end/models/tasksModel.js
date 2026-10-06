const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    description: {type: String, required: true},
    createdDate: {type: Date, required: true},
    status: {type: Boolean, required: true},
    priority: {type: String, required: true}
})

module.exports = mongoose.model("tasks",taskSchema);