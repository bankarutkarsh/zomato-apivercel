const Restaurants = require('../DataBase/restaurant.js');

exports.getRestaurants = (req,res) => {
    Restaurants.find()
    .then(response => {
        res.status(200).json({message: "Restaurants fetched Successfully", restaurants: response})
    })
    .catch(err => res.status(500).json({error: err}));
}


exports.filterRestaurant = (req, res) => {
    let { location, lcost, hcost, cuisine, mealtypes, sort, page } = req.body;

    sort = sort ? sort : 1// (1-low to high) (-1-high to low)
    page = page ? page : 1// Page 1 is default
    // cost = cost ? cost : 0

    const itemsPerPage = 2;
    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;
    let filterObj = {};
    location && (filterObj["city"] = location);                         
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost});   
    cuisine && (filterObj["Cuisine.cuisine"] = { $in: cuisine } );          
    mealtypes && (filterObj["type.mealtype"] = mealtypes);


    console.log(filterObj);

    Restaurants.find( filterObj ).sort({cost: sort})
        .then(response => {
            const filteredpages = response.slice(startIndex, endIndex);
            res.status(200).json({message: "Restaurants fetched Successfully", restaurants: filteredpages})
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}