const Food = require('../models/Food');

exports.addFood = (req, res, next) => {
    const name = req.body.title;
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