const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const User = require("./models/user.model")
const Admin = require("./models/admin.model")
const jwt = require("jsonwebtoken")
require('dotenv').config()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected to MongoDB..."))
    .catch(err => console.error("could not connect to MongoDB...", err))

app.post("/api/register", async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            coins: [{ coinType: 'XLM', logo: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157', balance: 0 }, { coinType: 'XRP', logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731', balance: 0 }, { coinType: 'XDC', logo: 'https://assets.coingecko.com/coins/images/2912/large/xdc-icon.png?1633700890', balance: 0 }, { coinType: 'TRON', logo: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066', balance: 0 }, { coinType: 'SOLANA', logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422', balance: 0 }, { coinType: 'BNB', logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850', balance: 0 }],
        })
        return res.json({ status: "ok" })
    }

    catch (err) {
        console.log(err)
        return res.json({ statue: "error", error: "Duplicate email" })
    }

})


app.post("/api/admin/create", async (req, res) => {
    try {
        await Admin.create({
            password: req.body.password,
            email: req.body.email,
        })
        return res.json({ status: "ok" })
    }

    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

})

app.post("/api/admin/login", async (req, res) => {

    try {
        const user = await Admin.findOne({
            email: req.body.email,
            password: req.body.password
        })

        const token = jwt.sign({
            email: user.email
        }, process.env.jwtToken)

        return res.json({ status: "ok", token, user: { ...user, password: undefined } })

    } catch (error) {
        return res.json({ status: "error", error })

    }

})

app.put("/api/coins/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        user.coins = req.body.coins
        user.save()
        return res.json({ status: "ok", user: { ...user, password: undefined } })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

}
)

//return a users coins list

app.get("/api/user/coins/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        return res.json({ status: "ok", coins: user.coins })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

})



// Update existing records to include the new field
async function updateRecords() {
    try {
        const recordsToUpdate = await User.find({ newField: { $exists: false } });

        for (const record of recordsToUpdate) {
            record.coins = [{ coinType: 'XLM', logo: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157', balance: 0 }, { coinType: 'XRP', logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731', balance: 0 }, { coinType: 'XDC', logo: 'https://assets.coingecko.com/coins/images/2912/large/xdc-icon.png?1633700890', balance: 0 }, { coinType: 'TRON', logo: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066', balance: 0 }, { coinType: 'SOLANA', logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422', balance: 0 }, { coinType: 'BNB', logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850', balance: 0 }]; // Set the default value for the new field
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
                ...user,
                password: undefined
            }
        })

        return res.json({ status: "ok", users: filteredUsers })
    }
    catch (err) {
        console.log(err)
        return res.json({ status: "error", error: err })
    }

})

app.delete("/api/user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "ok", user: { ...user, password: undefined } })
    } catch (error) {
        return res.json({ status: "error", error: error })
    }
})

app.post("/api/user/profile", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        user.profilePic = req.body.profilePic

        user.save()
        return res.json({ status: "ok", user: { ...user, password: undefined } })
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