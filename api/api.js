

const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getBookByID(id) {
    var baseURL = url + ('/' + id.toString());                             // Adds on the id to create a request url to get the data for that specific book.
    return await fetch(baseURL).then((result) => result.json());;           // Attempts to fetch the data, if successful it returns the JSON-formatted data for the book.
}
