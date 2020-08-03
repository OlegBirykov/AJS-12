import Cart from '../service/Cart';

test('Должен создаваться пустой список товаров', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Должны добавляться новые товары', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: true, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: true, count: 1 });
  expect(cart.items.length).toBe(2);
  expect(cart.items[0].count).toBe(1);
  expect(cart.items[1].count).toBe(2);
});

test('Должна вычисляться общая стоимость товаров', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: false, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: true, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: true, count: 1 });
  expect(cart.getSum()).toBe(3900);
});

test('Должна вычисляться общая стоимость товаров со скидкой', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: false, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: false, count: 1 });
  expect(cart.getSumWithDiscount(10)).toBe(3060);
  expect(cart.getSumWithDiscount(-5)).toBe(3400);
  expect(cart.getSumWithDiscount(120)).toBe(0);
});

test('Должен удаляться товар по существующему идентификатору', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: false, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: false, count: 1 });
  expect(cart.delete(1008)).toBe(true);
  expect(cart.items.length).toBe(2);
  expect(cart.delete(1009)).toBe(false);
  expect(cart.items.length).toBe(2);
});

test('Должно уменьшаться число единиц товара по существующему идентификатору', () => {
  const cart = new Cart();
  cart.add({ id: 1001, name: 'War and Piece', price: 2000, isMulti: false, count: 1 });
  cart.add({ id: 1008, name: 'Meteora', price: 900, isMulti: false, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: true, count: 1 });
  cart.add({ id: 2002, name: 'Tiger', price: 500, isMulti: true, count: 1 });
  expect(cart.decrement(2002)).toBe(true);
  expect(cart.items.length).toBe(3);
  expect(cart.decrement(2002)).toBe(true);
  expect(cart.items.length).toBe(2);
  expect(cart.decrement(2002)).toBe(false);
  expect(cart.items.length).toBe(2);
});
