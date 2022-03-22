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

// clear field after form submit
UI.prototype.clear = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listener
document.getElementById('book-form').addEventListener('submit',function(e) {
    // get form value
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    // instantiate book object
    const book = new Book(title, author, isbn);

    // instantiate UI object
    const ui = new UI();

    // add book to the list
    ui.addBook(book);

    // clear form field
    ui.clear();

    e.preventDefault();
});
