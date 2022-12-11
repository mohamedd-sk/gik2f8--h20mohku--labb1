"use strict";

let bookList = [];
let bookInfo = {};
let newBookList = [];


getAll().then((apiBooks) => (bookList = apiBooks));
window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


function renderBookList(books) {
  newBookList = books;
  const root = document.getElementById("root");

  const existingBookList = document.getElementById("search-list");
  if (existingBookList) {
    root.removeChild(existingBookList);
  }
  if (books.length > 0 && searchField.value) {
    root.insertAdjacentHTML("beforeend", BookList(books));
  }
}
const searchField = document.getElementById("searchField");


searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {

      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().indexOf(searchTerm) >= 0 || 0
      );
    })
  )
);

let deletedElement = null;

document.body.addEventListener("mouseover", (e) => {
  deletedElement = e.target;
  renderDetails(e);
});


async function renderDetails(e) {
  let target = e.target;
  if (target.id === "listItem") {
    let parent = target.parentNode;
    let listItems = parent.children;
    let idx = null;
    for (let i = 0; i < listItems.length; i++) {
      const element = listItems[i];
      if (target === element) {
        idx = i;
        break;
      }
    }
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i]["title"] === newBookList[idx]["title"] && !(document.getElementById("detailSection"))) {
        await getBookByID(i + 1).then((apiData) =>
          target.insertAdjacentHTML('beforeend', DetailedBookListItem(apiData)));
      }
    }
    root.addEventListener("mouseout", (e) => {
      let element = e.target;
      if (element.id === "listItem") {
        for (let child in element.children) {
          if (child === deletedElement) return;
        }
        for (let i = 0; i < element.children.length; i++) {
          if (i == 0) continue;
          const el = element.children[i];
          if (el) {
            element.removeChild(el);
          }
        }
      }
    });
  }
}
