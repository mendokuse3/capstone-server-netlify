const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_name: String,
    image: [String]
});

const Items = mongoose.model("Item", itemSchema);

module.exports = Items;