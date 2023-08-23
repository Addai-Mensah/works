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
        return res.json({ status: "ok" })
    }

    catch (err) {
        console.log(err)
        return res.json({ statue: "error", error: "Duplicate email" })
    }

})

// Update existing records to include the new field
async function updateRecords() {
    try {
        const recordsToUpdate = await User.find({ newField: { $exists: false } });

        for (const record of recordsToUpdate) {
            record.profilePic = ''; // Set the default value for the new field
            await record.save();
        }

        console.log('Data migration completed.');
    } catch (error) {
        console.error('Error during data migration:', error);
    } finally {
        mongoose.disconnect();
    }
}

// updateRecords();





app.post("/api/user", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        user.name = req.body.name
        user.email = req.body.email
        if (req.body.password) {
            user.password = req.body.password
        }
        user.save()
        return res.json({ status: "ok", user: { ...user, password: undefined } })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

})
app.get("/api/users", async (req, res) => {
    try {
        const user = await User.find()
        const filteredUsers = user.map(user => {
            return {
                name: user.name,
                email: user.email,
                profilePic: user.profilePic
            }
        })
            
        return res.json({ status: "ok",  users: filteredUsers  })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

})

app.post("/api/user/profile", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        user.profilePic = req.body.profilePic

        user.save()
        return res.json({ status: "ok", user: { ...user,password:undefined } })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
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

        return res.json({ status: "ok", token, user: { ...user, password: undefined } })

    } catch (error) {
        return res.json({ status: "error", error })

    }

})




const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`server started ${port}`)
})