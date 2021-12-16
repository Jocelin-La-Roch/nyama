const Food = require('../models/Food');
const io = require('../../socket');

exports.addFood = (req, res, next) => {
  console.log("title: ", req.body.name, "imageUrl: ", req.body.imageUrl, "price: ", req.body.price, "description: ", req.body.description)
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Food.create({
        name: name,
        price: price,
        imageUrl: imageUrl,
        description: description,
    }).then(result => {
        console.log(result);
        io.getIO().emit(
            'users',
            {
                action: 'create',
                user: {
                    id: 128,
                    name: req.body.name,
                }
            }
        )
        res.send("ADD SUCCESS");
        console.log('Created Product');
      })
      .catch(err => {
        console.log(err);
    });
  };
exports.editFood = (req, res, next) => {};
exports.deleteFood = (req, res, next) => {};
exports.getFood = (req, res, next) => {};
exports.getAllFood = (req, res, next) => {};
exports.getAllFoodByRestaurant = (req, res, next) => {};
exports.getAllFoodByCategory = (req, res, next) => {};
