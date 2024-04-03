export default class Iterable {
  public iterable;
  public index = -1;

  constructor(iterable: any) {
    this.iterable = iterable;
  }

  public [Symbol.iterator]() {
    let index = -1;
    const data = this.iterable;

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
