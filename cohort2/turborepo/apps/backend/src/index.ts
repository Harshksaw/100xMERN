

const express = require('express');

const app = express();




app.get("/", (req : any , res : any) => {
    res.json({
        message : "Hello "
    })
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }   )


