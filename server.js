const express = require('express');
const app = express()
const mysql = require('mysql')
const path = require('path')

// include router
const biodataRouter = require('./routes/biodata')

// create mysql connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biodata'
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
app.set('view engine', 'ejs')

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})

// routing
app.use('/biodata', biodataRouter)

// starting server
app.listen(3000, function () {
  console.log('server listening on port 3000')
})