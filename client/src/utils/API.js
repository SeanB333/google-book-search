import Axios from "axios";

const Url = "https://www.googleapis.com/books/v1/volumes"
const key = "AIzaSyC4MIifQ6sa1FSSkoqt7hHjCGcqDNIjH94"

export default {
    // gets all books from google api
    getBooks: function(search) {
        return Axios.get(`${Url}?q=${search}&key=${key}`)
    },
    // gets books with given id
    getBook: function(id) {
        return Axios.get(`/api/books${id}`);
    },
    // deletes books with the given id
    deleteBook: function(id) {
        return Axios.delete(`/api/books/${id}`);
    },
    // saves books to the database
    saveBook: function(bookData) {
        return Axios.post("/api/books", bookData);
    }
};