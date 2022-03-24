// Title: ES5 OOP Book list CRUD
// Author: obiwan
// Date: 22-Mac-2022

// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// local storage constructor
function Store(){}

Store.prototype.getBooks = function() {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

Store.prototype.displayBooks = function() {
    const books = this.getBooks();
    books.forEach(function (book) {
        const ui = new UI;
        // add book to ui
        ui.addBook(book);
    });   
}
Store.prototype.addBooks = function(book){
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

// add book
UI.prototype.addBook = function(book) {
const list = document.getElementById('book-list');
// create tr element
const row = document.createElement('tr');
// insert cols
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;

list.appendChild(row);
}


// show alert
UI.prototype.showAlert = function(msg, className) {
    // create div
    const div = document.createElement('div');
    // add class
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(msg));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert above the form
    container.insertBefore(div, form);

    // timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}

// clear field after form submit
UI.prototype.clear = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove()
    }
}

// DOM Event listener
// const store = new Store();

// document.addEventListener('DOMContentLoaded', store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',function(e) {
    // get form value
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    // instantiate book object
    const book = new Book(title, author, isbn);

    // instantiate UI object
    const ui = new UI();

    // validate
    if (title === '' || author === '' || isbn === '') { 
        ui.showAlert('Pleast insert all fields', 'error');
    } else {
        // add book to the list
        ui.addBook(book);
        
        // add book to ls
        const store = new Store();
        store.addBooks(book);

        // show success
        ui.showAlert('Book Added!', 'success');

        // clear form field
        ui.clear();   
     }

    e.preventDefault();
});

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteBook(e.target);

    // show success
    ui.showAlert('Book Remove!', 'success');

    e.preventDefault();
})
