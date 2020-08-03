import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(4298, 'The Avengers', 'Marvel Studios', 650, 2012, 'USA', 'Avengers Assemble!', 'science fiction, action, fantasy, adventure', '137 min. / 02:17'));

console.log(cart.items);
console.log(cart.getSum());
console.log(cart.getSumWithDiscount(20));

console.log(cart.delete(999));
console.log(cart.delete(4298));
console.log(cart.items);

console.log(cart.decrement(1008));
console.log(cart.items);
console.log(cart.decrement(1008));
console.log(cart.items);
