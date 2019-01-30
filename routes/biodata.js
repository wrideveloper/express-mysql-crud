const express = require("express")
const router = express.Router()

router.get("/", function(req, res) {
  req.con.query("SELECT * FROM biodata", function(err, rows) {
    res.render("biodata/index", { data: rows })
  })
})

router.get("/create", function(req, res) {
  res.render("biodata/create")
})

router.post("/", function(req, res) {
  const biodata = req.body
  req.con.query(
    `INSERT INTO biodata SET 
      nama = '${biodata.nama}', 
      alamat = '${biodata.alamat}'`,
    function(err) {
      res.redirect("/biodata")
    }
  )
})

router.get("/:id/edit", function(req, res) {
  req.con.query(
    `SELECT * FROM biodata WHERE id_biodata = ${req.params.id}`,
    function(err, rows) {
      res.render("biodata/edit", { data: rows[0] })
    }
  )
})

router.put("/:id", function(req, res) {
  const biodata = req.body
  req.con.query(
    `UPDATE biodata SET 
      nama = '${biodata.nama}', 
      alamat = '${biodata.alamat}' 
      WHERE id_biodata = ${req.params.id}`,
    function(err) {
      res.redirect("/biodata")
    }
  )
})

router.delete("/:id", function(req, res) {
  req.con.query(
    `DELETE FROM biodata WHERE id_biodata = ${req.params.id}`,
    function(err) {
      res.redirect("/biodata")
    }
  )
})

module.exports = router
