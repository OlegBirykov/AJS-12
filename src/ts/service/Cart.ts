import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  getSum(): number {
    return this._items.reduce((sum, item) => sum += item.price, 0);
  }

  getSumWithDiscount(percent: number): number {
    let k = percent;
    k = k > 100 ? 100 : (k < 0 ? 0 : k); 
    k = (100 - k) / 100;
    return this.getSum() * k;
  }

  delete(id: number): boolean {
    const index = this._items.findIndex(item => item.id === id);
    if (index >= 0) {
      this._items.splice(index, 1);
      return true;
    }
    return false;
  }

}