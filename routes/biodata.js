const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('biodata/index')
})

router.get('/create', function (req, res) {
  res.render('biodata/create')
})

router.post('/', function (req, res) {
  res.send('menyimpan biodata')
})

router.get('/:id', function (req, res) {
  res.render('biodata/show')
})

router.get('/:id/edit', function (req, res) {
  res.render('biodata/edit')
})

router.put('/:id', function (req, res) {
  res.send('update biodata')
})

router.delete('/:id', function (req, res) {
  res.send('delete biodata')
})

module.exports = router