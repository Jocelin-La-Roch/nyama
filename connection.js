/*const {Client} = require('pg');

const client = new  Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "ICEstorm123",
    database: "node-postgre"
});

module.exports = client;*/
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-postgre',
    'postgres',
    'ICEstorm123',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);

module.exports = sequelize;

