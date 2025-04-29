const library = {
    books:[{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: ['fiction', 'classic'],
        isAvailable: true
    }] 
}

const getBookSummary = (object, bookName) => {
   let book =  object.books.find((element) => element.title === bookName);
   if(book) {
    return `title: ${book.title} author: ${book.author} year: ${book.year}`
   } else {
    return `Book not found`;
   }
}

const checkOut = (object, bookName) => {
   let book = object.books.find((element) => element.title === bookName);

   if (book) {
        book.isAvailable = false;
        return `${book.title} has been checked out.`;
    } else {
        return `Book not found.`;
}
}

const returnBook = (object, bookName) => {
    let book = object.books.find((element) => element.title === bookName);

    if(book){
        book.isAvailable = true;
        return `${book.title} has been checked in.`
    } else {
        return 'Book not found.'
    }
}

const getAvailableBooks = (object) => {
    return object.books.filter((book) => book.isAvailable === true);
}

