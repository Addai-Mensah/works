const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const User = require("./models/user.model")
const jwt = require("jsonwebtoken")
require('dotenv').config()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("connected to MongoDB..."))
    .catch(err => console.error("could not connect to MongoDB...", err))

app.post("/api/register", async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ statues: "ok" })
    }

    catch (err) {
        console.log(err)
        res.json({ statues: "error", error: "Duplicate email" })
    }

})

app.post("/api/login", async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })

        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, process.env.jwtToken)

        return res.json({ status: "ok", token, user })

    } catch (error) {
        return res.json({ status: "error", error })

    }

})




const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`server started ${port}`)
})