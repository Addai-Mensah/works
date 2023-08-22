const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const User = require("./models/user.model")
const jwt = require("jsonwebtoken")




app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true')
.then(() => console.log("connected to MongoDB..."))
.catch(err => console.error("could not connect to MongoDB...", err))

app.post("/api/register", async (req,res) => {
    console.log(req.body)

    try {
        await User.create({
            name : req.body.name,
            email :  req.body.email ,
            password: req.body.password
        })
        res.json({statues:"ok"})
    }

    catch (err) {
        console.log(err)
        res.json({statues:"error", error: "Duplicate email"})
    }
   
})

app.post("/api/login", async (req,res) => {
   
      const user =  await User.findOne({
            email :  req.body.email ,
            password: req.body.password
        })

        if (user){
            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, "secret")
            return res.json({status: "ok", user: token})
        } else {
            return res.json({ status: "error", user: false})
        }
       
    res.json({statues:"ok"})
})





app.listen(1337, () => {
    console.log("server started 1337")
})