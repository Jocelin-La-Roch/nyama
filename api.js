//const sequelize = require('./connection.js')
const sequelize = require('./app/utils/database');
const express = require('express');
const bodyParser = require("body-parser");
var Sequelize = require('sequelize');
const FoodRoutes = require('./app/routes/FoodRoutes');
const Food = require('./app/models/Food');

let port = process.env.PORT || 3000


const app = express();

/*var Product = sequelize.define('product', {
    name: Sequelize.STRING,
    desc: Sequelize.STRING
  });*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(FoodRoutes);
app.get("/", (req, res, next)=>{
    res.send("hello heroku");
})
/*app.get('/products', (req, res, next) => {
    Product.findAll().then(products => {
        res.send(products).status(200);
    }).catch(err => {
        console.log(err);
    })
});*/

app.listen(port, ()=>{
    console.log("Sever is now listening at port 3300");
});

sequelize.sync().then(() => {
    console.log("Synchronisation succeeded");
    Food.create({
        name: "food test",
        price: 1000,
        imageUrl: "No image test",
        description: "description test",
    }).then(result => {
        // console.log(result);
        console.log('Test Food Created');
      })
      .catch(err => {
        console.log(err);
    });
}).catch(err => console.log(err));
