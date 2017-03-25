/**
Object Literals
**/
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount.
  // Write code here:
  var cujo = {
    title: 'cujo',
    author: 'Stephen King',
    pageCount: 309
  };
  var harryPotter = {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K Rowling",
    pageCount: 336
  };
  var hobbit = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pageCount:  320
  };

  // Add a property of haveRead to each book object you created. This should be set to true or false.
  // Write code here:
  cujo.haveRead = true;
  harryPotter.haveRead = false;
  hobbit.haveRead = true;

  // Store these objects in an array called books.
  // Write code here:
  var books = [cujo, harryPotter, hobbit];

  // return this array
  return books;
}

function fixLiteralSyntax() {
  // Fix the problems with our object literal

  var hiddenFiguresMovie = {
      name : "Hidden Figures",
      runtime : "127 mins",
      releaseYear : 2016,
      director : "Theodore Melfi"
  };


  // return corrected object
  return hiddenFiguresMovie;
}


/**
Object Constructors
**/

// Write a constructor function to create 'Book' objects with the same four properties as above.
// Write the constructor function here:
function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}


function createBooksWithConstructor() {
  // In this function, create 3 new 'Book' objects by using the constructor function you wrote above.
  // Write code here:

  var brownBear = new Book('Brown Bear, Brown Bear, What do You See?', 'Bill Martin / Eric Carle', 24, true);
  var greenEggsAndHam = new Book('Green Eggs and Ham', 'Dr. Seuss', 72, true);
  var twilight = new Book('Twilight', 'Stephenie Meyer', 498, false);

  // Store these new books in an array called books.
  // Write code here:
  var books = [brownBear, greenEggsAndHam, twilight];
  // return our array of books
  return books;
}
console.log(threeBooks());
console.log(fixLiteralSyntax());
console.log(createBooksWithConstructor());

var test1 = threeBooks();
var test2 = createBooksWithConstructor();

console.log('threeBooks array:');
for (var i = 0; i < test1.length; i++) {
  console.log(test1[i]);
}

console.log('createBooksWithConstructor array:');
for (var i = 0; i < test2.length; i++) {
  console.log(test2[i]);
}
