const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'dd1lff6k53fppp',
    'bjsqnyihfpacxm',
    '17adb6fff84cd92d94c6a996b636c0570409ec4ef77a0dbbe2bddc7b2d84b3d2',
    {
        dialect:"postgres",
        host: 'ec2-23-23-128-222.compute-1.amazonaws.com',
        ssl: true,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
              }
        }
    },
);

module.exports = sequelize;