const sequelize = require('./app/utils/database');
const express = require('express');
const bodyParser = require("body-parser");
var Sequelize = require('sequelize');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const Category = require('./app/models/Category');
const CommentFood = require('./app/models/CommentFood');
const CommentRestaurant = require('./app/models/CommentRestaurant');
const FavoriteFood = require('./app/models/FavoriteFood');
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

const CategoryRoutes = require('./app/routes/CategoryRoutes');
const CommentFoodRoutes = require('./app/routes/CommentFoodRoutes');
const CommentRestaurantRoutes = require('./app/routes/CommentRestaurantRoutes');
const FavoriteFoodRoutes = require('./app/routes/FavoriteFoodRoutes');
const FavoriteRestaurantRoutes = require('./app/routes/FavoritesRestaurantRoutes');
const FoodRoutes = require('./app/routes/FoodRoutes');
const ImageFoodRoutes = require('./app/routes/ImageFoodRoutes');
const ImageRestaurantRoutes = require('./app/routes/ImageRestaurantRoutes');
const ImageUserRoutes = require('./app/routes/ImageUserRoutes');
const OrderRoutes = require('./app/routes/OrderRoutes');
const ReservationRoutes = require('./app/routes/ReservationRoutes');
const RestaurantRoutes = require('./app/routes/RestaurantRoutes');
const StarFoodRoutes = require('./app/routes/StarFoodRoutes');
const StarRestaurantRoutes = require('./app/routes/StarRestaurantRoutes');
const UserRoutes = require('./app/routes/UserRoutes');

console.log('.');
let port = process.env.PORT || 3000

console.log('..');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/", (req, res, next)=>{
    res.send("hello heroku");
});
app.use(CategoryRoutes);
app.use(CommentFoodRoutes);
app.use(CommentRestaurantRoutes);
app.use(FavoriteFoodRoutes);
app.use(FavoriteRestaurantRoutes);
app.use(FoodRoutes);
app.use(ImageFoodRoutes);
app.use(ImageRestaurantRoutes);
app.use(ImageUserRoutes);
app.use(OrderRoutes);
app.use(ReservationRoutes);
app.use(RestaurantRoutes);
app.use(StarFoodRoutes);
app.use(StarRestaurantRoutes);
app.use(UserRoutes);

app.listen(port, ()=>{
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
