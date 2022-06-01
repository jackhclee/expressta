const axios = require('axios').default;

test("Get all books from server", async () => {
  const response = await axios.get("http://localhost:8080" + "/books");
  let books = response.data;
  console.log(books)
  expect(books.length).toBe(2);
}
)

test("Delete first book and get all books", async () => {
  const responseDelete = await axios.delete("http://localhost:8080" + "/books" + "/0");

  const response = await axios.get("http://localhost:8080" + "/books");
  let books = response.data;
  console.log(books)
  expect(books.length).toBe(1);
}
)

test("Delete second book and get all books", async () => {
  const responseDelete = await axios.delete("http://localhost:8080" + "/books" + "/1");

  const response = await axios.get("http://localhost:8080" + "/books");
  let books = response.data;
  console.log(books)
  expect(books.length).toBe(0);
}
)

