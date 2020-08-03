import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const index = this._items.findIndex(elem => elem.id === item.id);  
    if (index < 0) {
      item.count = 1;
      this._items.push(item);
    } else if (item.isMulti) {
      this._items[index].count++;
    }
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  getSum(): number {
    return this._items.reduce((sum, item) => sum += item.price * item.count, 0);
  }

  getSumWithDiscount(percent: number): number {
    let k = percent;
    k = k > 100 ? 100 : (k < 0 ? 0 : k); 
    k = (100 - k) / 100;
    return this.getSum() * k;
  }

  decrement(id: number): boolean {
    const index = this._items.findIndex(item => item.id === id);
    if (index < 0) {
      return false;     
    }
    this._items[index].count--;
    if(!this._items[index].count) {
      this._items.splice(index, 1);
    }
    return true;
  }

  delete(id: number): boolean {
    const index = this._items.findIndex(item => item.id === id);
    if (index < 0) {
      return false;     
    }
    this._items.splice(index, 1);
    return true;
  }

}