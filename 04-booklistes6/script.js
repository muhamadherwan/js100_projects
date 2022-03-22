// Title: ES6 OOP Book list CRUD
// Author: obiwan
// Date: 22-Mac-2022

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }   
}

class UI {
    addBook( book) {
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

    showAlert( msg, className) {
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
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    clear() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
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

        // show success
        ui.showAlert('Book Added!', 'success');

        // clear form field
        ui.clear();
    }

    e.preventDefault();
});

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteBook(e.target);

    // show success
    ui.showAlert('Book Remove!', 'success');

    e.preventDefault();
})