const express = require('express')
const mysql = require('../database')
const router = express.Router()


router.get('/', (req, res) => {

    mysql.query("SELECT * FROM contact ORDER BY name ASC", (err, rows, fields) => {
        if (!err) {
            // res.json(rows)
            res.render('contact/getContact', { rows })
        } else {
            res.json({status: "Error"})
            console.error(errr)
        }
    })

})

router.get('/edit/:id', (req, res) => {
    const { id } = req.params

    mysql.query("SELECT * FROM contact WHERE id = ?", [id], (err, rows) => {
        if(!err) {
            res.render('contact/editContact', {rows})
        } else {
            console.error(err)
        }
    })
})

router.get('/add', (req, res) => {
    res.render('contact/addContact')
})

router.post('/add', (req, res) => {
    const { name, number } = req.body
    
    mysql.query("INSERT INTO contact (name, number) VALUES (?, ?)", [name, number], (err, rows, fields) => {
        if(!err) {
            res.redirect('/contact')
        } else {
            console.error(err)
        }
    })
})

router.post('/edit/:id', (req, res) => {
    const { id } = req.params
    const { name, number } = req.body
    const newContact = { name, number }

    mysql.query("UPDATE contact SET ? WHERE id = ?", [newContact, id], (err, rows, fields) => {
        if(!err) {
            res.redirect('/contact')
        } else {
            console.log(err)
        }
    })

})

router.get('/delete/:id', (req, res) => {
    const { id } = req.params

    mysql.query("DELETE FROM contact WHERE id = ?", [id], (err, rows) => {
        if(!err) {
            res.redirect('/contact')
        } else {
            console.error(err)
        }
    })
})

module.exports = router