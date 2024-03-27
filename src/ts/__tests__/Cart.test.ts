import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

const cart = new Cart();
const book = new Book(1, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(2, 'Meteora', 'Linkin Park', 900);
cart.add(book);
cart.add(musicAlbum);

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('testing sum', () => {
  const sum = cart.sum();
  expect(sum).toBe(2900);
});

test('testing sumWithDiscount', () => {
  const discount = cart.sumWithDiscount(50);
  expect(discount).toBe(1450);
});

test('testing delete', () => {
  cart.delete(2);
  expect(cart.items.length).toBe(1);
});