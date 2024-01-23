const express = require("express");
const router = express.Router();
const zod = require("zod");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const  { authMiddleware } = require("../middleware");

const userSchema = zod.object({
    username: zod.string().min(4).max(30),
    firstname: zod.string().min(4).max(30),
    lastname: zod.string().min(4).max(30),
    password: zod.string().min(6).max(30),

})

app.post("/signup",async (req, res) => {

    const {success, error} = userSchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            success: false,
            error: error,
            message: "Invalid data"
        })
    }

    const user = User.findOne({
        username: req.body.username
    })

    if(user._id){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }


    const dbUser = await User.create(body);
    const token = jwt.sign({
        id: dbUser._id
    }, process.env.JWT_SECRET, {
        expiresIn: "3h"
    
    })
    res.json(
        {
            success: true,
            message: "User created",
            token: token
        }
    )
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})


app.get("/bulk", async (req, res) => {

    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filter

            },
        }, {
            lastName: {
                $regex: filter

            },
        }]
    })
    res.json({
        user: users.map(user =>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})



module.exports = router;