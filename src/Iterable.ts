export default class Iterable implements Iterator<any> {
  public items;
  public index = -1;

  constructor(items: any) {
    this.items = items;
  }

  public next(): IteratorResult<any> {

    ++this.index;
    let isDone = false;

    if (!(this.index in this.items)) {
      isDone = true;
      this.index = -1
    }

    return {
      done: isDone,
      value: this.index
    }
  }

  // public [Symbol.iterator]() {
  //   let index = -1;
  //   const data = this.items;

  //   return {
  //     next: () => ({
  //       value: this.item(data[++index]),
  //       done: !(index in data),
  //     }),
  //   };
  // }

  item(item: any) {
    return item;
  }
}
