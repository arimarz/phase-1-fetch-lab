function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    renderBooks(json)
    totalNumberOfPages(json)
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
function totalNumberOfPages(books) {
  console.log(books.reduce((total, book) => total + book.numberOfPages, 0))
  // console.log(books.numberOfPages.reduce((pages, current) => pages + current))
};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
