import Book from '../domain/Book';

test('new book should be create', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  expect(book).toBeDefined();
});
