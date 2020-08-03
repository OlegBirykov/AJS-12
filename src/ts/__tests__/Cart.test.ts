import Cart from '../service/Cart';

test('Должен создаваться пустой список товаров', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Должны добавляться новые товары', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  expect(cart.items.length).toBe(2);
});

test('Должна вычисляться общая стоимость товаров', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  cart.add({ id: 2002, name: 'Tiger', price: 500 });
  expect(cart.getSum()).toBe(3400);
});

test('Должна вычисляться общая стоимость товаров со скидкой', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  cart.add({ id: 2002, name: 'Tiger', price: 500 });
  expect(cart.getSumWithDiscount(10)).toBe(3060);
  expect(cart.getSumWithDiscount(-5)).toBe(3400);
  expect(cart.getSumWithDiscount(120)).toBe(0);
});

test('Должен удаляться товар по существующему идентификатору', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  cart.add({ id: 2002, name: 'Tiger', price: 500 });
  expect(cart.delete(1008)).toBe(true);
  expect(cart.items.length).toBe(2);
});

test('Не должен удаляться товар по несуществующему идентификатору', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000 });
  cart.add({ id: 1008, name: 'Meteora', price: 900 });
  cart.add({ id: 2002, name: 'Tiger', price: 500 });
  expect(cart.delete(1009)).toBe(false);
  expect(cart.items.length).toBe(3);
});
