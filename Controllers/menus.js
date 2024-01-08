const Menu = require('../DataBase/menu')

exports.getMenu = (req,res) => {
    const { askedId } = req.params;
    Menu.find({restaurantId: askedId},{})
    .then(response => {
        res.status(200).json({message:"Menu fetched Successfully",menu:response})
    })
    .catch(err => res.status(500).json({error: err}));
}