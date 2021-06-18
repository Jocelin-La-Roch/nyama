const sequelize = require('./connection.js')
const express = require('express');
const bodyParser = require("body-parser");
var Sequelize = require('sequelize');

let port = process.env.PORT || 3000


const app = express();

var Product = sequelize.define('product', {
    name: Sequelize.STRING,
    desc: Sequelize.STRING
  });


app.use(bodyParser.json());
app.get("/", (req, res, next)=>{
    res.send("hello heroku");
})
app.get('/products', (req, res, next) => {
    Product.findAll().then(products => {
        res.send(products).status(200);
    }).catch(err => {
        console.log(err);
    })
});

app.listen(port, ()=>{
    console.log("Sever is now listening at port 3300");
});

sequelize.sync().then(function() {
    return Product.create({
      name: 'janedoe',
      desc: 'test'
    });
  }).then(function(jane) {
    console.log(jane.get({
      plain: true
    }));
  }).catch(err => console.log(err));


/*app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});*/
/*app.get('/users/:id', (req, res)=>{
    client.query(`Select * from user where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into user(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
});
app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update user
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
});

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
});*/
