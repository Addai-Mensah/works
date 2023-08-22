const registerUser = async (req,res) => {
    const {name, email, password,picture} = req.body;

    res.json({
        name,
        email,
    })
}
module.exports = {registerUser}