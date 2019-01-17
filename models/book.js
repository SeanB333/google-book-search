// import mongoose and set schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// new book schema
const bookSchema = new Schema ({
    title: { type: String, required: true },
    author: { type: String, required: true},
    description: String,
    image: { type: String, required: true},
    link: { type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
