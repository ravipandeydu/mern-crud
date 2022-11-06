const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {TodoModel} = require("../models/Todo.model")

const todosController = Router();

todosController.get("/", async (req, res) => {
    const todos = await TodoModel.find({userId : req.body.userId})
    res.send(todos)
})


todosController.post("/create", async (req, res) => {
    const {Title, Status, userId} = req.body;
    const todo = new TodoModel({
        Title,
        Status,
        userId
    })
    try{
        await todo.save()
        res.send("todo created")
    }
    catch(err){
        res.send("something went wrong")
    }
})


todosController.delete("/delete/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedTodo = await TodoModel.findOneAndDelete({_id : todoId, userId : req.body.userId})
    if(deletedTodo){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})

todosController.patch("/edit/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedTodo = await TodoModel.findOneAndUpdate({_id : noteId, userId : req.body.userId},req.body)
    if(deletedNote){
        res.send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})


module.exports = {
    todosController
}