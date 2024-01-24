const express = require("express");


const app = express();
const mainRouter = require("./routes/index.js");
const userRouter = require("./routes/user.js");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");

app.use(cors());
app.use(express.json());


app.use("/api/v1" ,  mainRouter)
app.use("/api/v2" ,  userRouter)
app.use("/api/v1/account", accountRouter)


app.listen(3000, () => {
    console.log("Server started on port 3000);
});