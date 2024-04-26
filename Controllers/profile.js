const Profile = require('../DataBase/profile')

exports.getProfiles = (req,res) => {
    Profile.find()
    .then(response => {
        res.status(200).json({message:"Profiles fetched Successfully",profiles:response})
    })
    .catch(err => res.status(500).json({error: err}));
}