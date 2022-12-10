const BookListItem = (book) => { 
  let html = `
    <li id=listItem class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
      <p class="pb-2">${book.author} - ${book.title}</p>
    </li>`;
  return html; 
};
