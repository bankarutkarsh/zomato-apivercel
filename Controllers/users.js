const User = require('../DataBase/user')
const Home_Page = "http://localhost:3000"
exports.signup = (req,res) => {
    const {email,name,password} = req.body;

    const userObj = new User({
        email,name,password
    })

    userObj.save()
        .then(response => {
            res.status(200).json({message: "User Details saved Successfully", details: response })
        })
        .catch(err => res.status(500).json({Error: err}))
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.find({
        email,
        password
    })

    .then(response => {
        
        if(response.length > 0){ 
            res.status(200).json({
                message: "User Details are Validated",
                isAuthenticated: true,
                user: response,
            })
                    
        }else{
            res.status(200).json({
                message: "User Details are not Validated",
                isAuthenticated: false,
                user: response
            })
        } 
        
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}