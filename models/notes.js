const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    item_name: String,
    description: String
});

const Notes = mongoose.model("Note", noteSchema);

module.exports = Notes;