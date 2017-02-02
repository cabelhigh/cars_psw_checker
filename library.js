//Make a function to create new books and add them to the library

//Make a function that takes books from the library and returns the reading status of each of them

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "The Hunger Games: Mockingjay",
    readinStatus: false
  }];

  /*Purpose: To create a new book JSON object with author, title, and readingStatus, then add it to the library
  Signature: createBook(author, title, readingStatus) -> will add to Library
  Ex:
    createBook("Thank You For Smoking", "Chistopher Buckly", true)
  */

  function createBook(author, title, readingStatus){
    var book = {
      authtor: author,
      title: title,
      readingStatus: readingStatus
    }
    library.push(book);
    return book;
  }

  /*Purpose: Make a function goes thru the library and prints out the reading status of each book, along with the book's title
  Signature: pullAllBooks()
  Ex:
    pullAllBooks() -> "The Road Ahead -- Read; Walter Issacson -- Read; etc"

  */

  function pullAllBooks() {
    library.forEach(function(book){
      if (book.readingStatus ===true){
        console.log(book.title + "-" + book.readingStatus)
      }
      else{
        console.log(book.title + "-" + book.readingStatus)
      }
    })
  }
