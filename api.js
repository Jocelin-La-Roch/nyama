const http = require('http');
const sequelize = require('./app/utils/database');
const { Routes } = require('./app/routes');
const express = require('express');
const bodyParser = require("body-parser");
var Sequelize = require('sequelize');

const Category = require('./app/models/Category');
const CommentFood = require('./app/models/CommentFood');
const CommentRestaurant = require('./app/models/CommentRestaurant');
const FavoriteFood = require('./app/routes/FavoriteFoodRoutes');
const FavoriteRestaurant = require('./app/models/FavoriteRestaurant');
const Food = require('./app/models/Food');
const ImageFood = require('./app/models/ImageFood');
const ImageRestaurant = require('./app/models/ImageRestaurant');
const ImageUser = require('./app/models/ImageUser');
const Order = require('./app/models/Order');
const Reservation = require('./app/models/Reservation');
const Restaurant = require('./app/models/Restaurant');
const StarFood = require('./app/models/StarFood');
const StarRestaurant = require('./app/models/StarRestaurant');
const User = require('./app/models/User');

console.log('.');
let port = process.env.PORT || 3000

console.log('..');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

console.log('...');
Routes.init(app);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`Server started - ${port}`);
});

Food.belongsTo(Restaurant, {constraint: true, onDelete: 'CASCADE'});
Restaurant.hasMany(Food);
Food.belongsToMany(Category, {through: 'FoodCategory'});
Category.belongsToMany(Food, {through: 'FoodCategory'});
Restaurant.belongsToMany(Category, {through: 'RestaurantCategory'});
Category.belongsToMany(Restaurant, {through: 'RestaurantCategory'});
Restaurant.belongsTo(User);
User.hasMany(Restaurant);
FavoriteFood.belongsTo(Food, {constraint: true, onDelete: 'CASCADE'});
Food.hasMany(FavoriteFood),
FavoriteFood.belongsTo(User);
User.hasMany(FavoriteFood);
FavoriteRestaurant.belongsTo(Restaurant, {constraint: true, onDelete: 'CASCADE'});
Restaurant.hasMany(FavoriteRestaurant);
FavoriteRestaurant.belongsTo(User);
User.hasMany(FavoriteRestaurant);
CommentFood.belongsTo(Food, {constraint: true, onDelete: 'CASCADE'});
Food.hasMany(CommentFood),
CommentFood.belongsTo(User);
User.hasMany(CommentFood);
CommentRestaurant.belongsTo(Restaurant, {constraint: true, onDelete: 'CASCADE'});
Restaurant.hasMany(CommentRestaurant);
CommentRestaurant.belongsTo(User);
User.hasMany(CommentRestaurant);
StarFood.belongsTo(Food, {constraint: true, onDelete: 'CASCADE'});
Food.hasMany(StarFood),
StarFood.belongsTo(User);
User.hasMany(StarFood);
StarRestaurant.belongsTo(Restaurant, {constraint: true, onDelete: 'CASCADE'});
Restaurant.hasMany(StarRestaurant);
StarRestaurant.belongsTo(User);
User.hasMany(StarRestaurant);
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(Restaurant);
Restaurant.hasMany(Order);
Order.belongsTo(Food);
Food.hasMany(Order);
Reservation.belongsTo(User);
User.hasMany(Reservation);
Reservation.belongsTo(Restaurant);
Restaurant.hasMany(Reservation);
ImageUser.belongsTo(User, {constraint: true, onDelete: 'CASCADE'});
User.hasOne(ImageUser);
ImageFood.belongsTo(Food, {constraint: true, onDelete: 'CASCADE'});
Food.hasMany(ImageFood);
ImageRestaurant.belongsTo(Restaurant, {constraint: true, onDelete: 'CASCADE'});
Restaurant.hasMany(ImageRestaurant);

sequelize.sync({force: true}).then(() => {
    console.log("Synchronisation succeeded");
}).catch(err => console.log(err));
