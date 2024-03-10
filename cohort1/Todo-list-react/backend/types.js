const zod = require("zod");


const createTodo =zod.object({
    title: String,
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


module.exports={
    createTodo: createTodo,
    updateTodo:updateTodo
}