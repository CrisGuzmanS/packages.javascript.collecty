export default class Iterable {
  public items;

  constructor(items: any) {
    this.items = items;
  }

  public [Symbol.iterator]() {
    let index = -1;
    const data = this.items;

    return {
      next: () => ({
        value: this.item(data[++index]),
        done: !(index in data),
      }),
    };
  }

  item(item: any) {
    return item;
  }
}
