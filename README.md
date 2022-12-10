# GIK2F8.

Här lagras kod för kursen GIK2F8.
'use strict';

let bookList = []; // Array used to store the list of books that's acquired from the API.
let bookData = {}; // Dictionary used to store the Data of a specific book.
let filteredList = [];

getAll().then((apiBooks) => (bookList = apiBooks));

window.addEventListener('load', () => {
getAll().then((apiBooks) => (bookList = apiBooks));

});

searchField.addEventListener('keyup', (e) =>
renderBookList(
bookList.filter(({ title, author, }) => {
const searchTerm = e.target.value.toLowerCase();
return (
title.toLowerCase().includes(searchTerm.toLowerCase()) ||
author.toLowerCase().includes(searchTerm.toLowerCase())

      );


      })

)
);

function renderBookList(bookList) {
filteredList = bookList;
const existingElement = document.querySelector('.book-list');

const root = document.getElementById('root');
//root.removeChild()

existingElement && root.removeChild(existingElement);
bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList))

}  
let hoveredElement = null;

/\*\*

- Adds an EventListener for if you mouse-over a book list element to display detailed information.
  \*/
  document.body.addEventListener("mouseover", (e) => {
  hoveredElement = e.target; // Sets the hoveredElement to the event target
  renderDetails(e); // Calls the renderBookDetails with the event target and the filteredList.
  });

/\*\*

- Method used to render the details of the hovered book.
-
- @param {_} element The passed event.
  _/
  async function renderDetails(e) {
  let target = e.target;
  if (target.id === "listItem") { // Checks if the id of the hovered element is 'listItem' indicating it's a book in the list.
  let parent = target.parentNode; // Get the parent element which should be the list
  let listItems = parent.children; // Get the children of the parent which should be the full list of list items.
  let idx = null; // Set index to null
  for (let i = 0; i < listItems.length; i++) { // Loop over all of the "li" elements in the "ul"
  const element = listItems[i]; // Grab the current item
  if (target === element) { // If the event target is the same as the looped element
  idx = i; // Then set index to the value of i
  break; // Break the loop
  }
  }
  for (let i = 0; i < bookList.length; i++) { // For Loop for each value between 0 and the length of bookList.
  if (bookList[i]["title"] === filteredList[idx]["title"] && !(document.getElementById("detailSection"))) { // If the titles match and the detailSection doesn't already exist
  await getBookByID(i + 1).then((apiData) => { // Then query the api for this index position
  target.insertAdjacentHTML('beforeend', DetailedBookListItem(apiData)) // Insert 'beforeend' the new details section
  });
  }
  }
  root.addEventListener("mouseout", (e) => { // Creates a 'mouseout' bubbling EventListener.
  let element = e.target; // Grabs the event target element.
  if (element.id === "listItem") { // If the elements id is 'listItem' indicating it's a book in the list.
  for(let child in element.children) { // For each child of the current element
  if (child === hoveredElement) return; // if the child is currently a hovered element, then do an early return to avoid closing the details
  }  
   for (let i = 0; i < element.children.length; i++) { // for i each children of the element
  if (i == 0) continue; // if i is 0 aka the base-information <p> tag then skip this loop iterations
  const el = element.children[i]; // Otherwise grab the element
  if (el) { // If the element isn't null/undefined
  element.removeChild(el); // Then remove the element
  }
  }
  }
  });
  }
  }
