const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
var mysql = require('mysql');
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
 

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'OOP'
});

// Log any errors connected to the db
db.connect(function(err){
    if (err) console.log(err)
    
  });
app.use(express.static(__dirname + '/public'));
  
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/product', (req, res) => {
  
    let data = req.query;
    let sql = 'SELECT * FROM product WHERE id_category = ' + data.id_category;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});


app.get('/allProduct', (req, res) => {
  
    let data = req.query;
    let sql = 'SELECT * FROM product';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.delete('/product', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'DELETE FROM product WHERE id_product = ' + req.body.id_product;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.post('/product', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'INSERT INTO product (name, price, id_category) VALUES ("' + req.body.name + '", "' + req.body.price + '", "' + req.body.id_category + '")';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.get('/category', (req, res) => {
  
    let sql = 'SELECT * FROM category';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.delete('/category', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'DELETE FROM category WHERE id_category = ' + req.body.id_category ;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.post('/category', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'INSERT INTO category (name) VALUES ("' + req.body.name + '")';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.get('/client', (req, res) => {
  
    let sql = 'SELECT * FROM client';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.delete('/client', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'DELETE FROM client WHERE id_client=' + req.body.id_client ;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});

app.post('/client', jsonParser, (req, res) => {
  
    console.log(req.body);
    let sql = 'INSERT INTO client (FIO, phone) VALUES ("' + req.body.FIO + '", "' + req.body.phone + '")';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});


app.post('/order', jsonParser, (req, res) => {
  
    let create_basket = '';
    let data = req.body;
    console.log(req.body);
    let sql = 'INSERT INTO orders (id_client, name) VALUES (' + req.body.id_client + ', "' + req.body.name + '")';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        let id = result.insertId;
        console.log(data);
        for (var i = 0; i < data.basketArr.length; i++){
            create_basket = create_basket + "('" + data.basketArr[i].count + "','" + data.basketArr[i].id_product + "','" +id +"'),";
        }
        create_basket.substring();
        sql_create_basket = "INSERT INTO basket (count, id_product, id_order) VALUES " + create_basket.slice(0, -1);
        db.query(sql_create_basket, function(err){
            if (err){
                throw err;
            }
        })
        
    });

});


app.get('/order', (req, res) => {
  
    let data = req.query;
    let sql = 'SELECT * FROM orders WHERE id_client=' + data.id_client;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});


app.get('/basket', (req, res) => {
  
    let data = req.query;
    console.log(data);
    let sql = 'SELECT basket.*, product.name FROM basket, product WHERE basket.id_product = product.id_product AND id_order=' + data.id_order;
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});


server.listen(3000, () => {
    console.log('listening on *:3000');
});


