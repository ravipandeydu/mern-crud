const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    Title : {type : String, required : true},
    Status : {type : Boolean, required : true},
    userId : {type : String, required : true}
})

const TodoModel = mongoose.model("todo", todoSchema)

module.exports = {
    TodoModel
}