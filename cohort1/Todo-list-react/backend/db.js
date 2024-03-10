const mongoose =require("moongoose");




mongoose.connect("mongodb+srv://harshkumar:programmer@cluster0.nxozrfb.mongodb.net/?retryWrites=true&w=majority")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports(todo)