function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((info) => {
    renderBooks(info);
    return info;
  }); 
}

function renderBooks(books) {
  const main2 = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main2.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});