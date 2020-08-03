import Cart from '../service/Cart';

test('Должен создаваться пустой список товаров', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Должен добавляться новый товар', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  expect(cart.items.length).toBe(2);
});
