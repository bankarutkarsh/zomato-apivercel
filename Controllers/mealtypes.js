const Mealtype =  require('../DataBase/mealtype')

exports.getMealtype = (req,res) => {
    Mealtype.find()
    .then(response =>{
        res.status(200).json({message: "Mealtypes Fetched Successfully", mealtype: response})
    })
    .catch(err => res.status(500).json({Error : err})) 
}

