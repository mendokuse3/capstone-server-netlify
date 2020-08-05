const express = require('express');
const router = express.Router();

const Notes = require('../models/notes.js');

// =======
// GET
// =======

router.get('/', (req, res) => {
    Notes.find({}, (err, foundNotes) => {
        res.json(foundNotes);
    })
})

// =======
// POST
// =======

router.post('/', (req, res) => {
    Notes.create(req.body, (err, createdNote) => {
        res.json(createdNote);
    })
})

// =======
// Update
// =======

router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, (err, updatedNote) => {
        res.json(updatedNote);
    })
})

// =======
// DELETE
// =======

router.delete('/:id', (req, res) => {
    Notes.findByIdAndDelete(req.params.id, (err, deletedNote) => {
        res.json(deletedNote);
    })
})

module.exports = router;