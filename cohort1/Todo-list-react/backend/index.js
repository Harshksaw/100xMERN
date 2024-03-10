const express = require("express")

const app = express()

const {createTodo, updateTodo} = require("./types")
const { todos} = require("./db")

app.use(express.json())




app.post("/todo",async (req, res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Your sent the wrong inputs"
        })
        return
    }
    
    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"

    })

})

app.get("/todos", async(req, res)=>{

    const data = await todos.find();

    console.log(todos)
    res.json({todos})

})

app.put("/completed",async (req, res)=>{
    const updatePayload = req.body;

    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload){
        res.status(411).json({
            msg:"you sent the worng inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed:true
    }
    )
    res.json({
        msg: "Todo marked as completed"
    })

})



app.list(3000)




