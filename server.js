const express = require('express');
const app = express()
const mysql = require('mysql')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()

// include router
const biodataRouter = require('./routes/biodata')

// create mysql connection
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})
con.connect(function (err) {
  if (err) {
    console.log('database connection error')
  } else {
    console.log('database connection success')
  }
})

// Using EJS template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})

// parsing post data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routing
app.use('/biodata', biodataRouter)

// starting server
app.listen(3000, function () {
  console.log('server listening on port 3000')
})