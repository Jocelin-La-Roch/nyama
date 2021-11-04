const Food = require('../models/Food');

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
        // console.log(result);
        res.send("ADD SUCCESS");
        console.log('Created Product');
      })
      .catch(err => {
        console.log(err);
    });
  };