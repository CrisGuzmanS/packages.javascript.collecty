export default class Iterable {
  public iterable;
  public index = -1;

  constructor(iterable: any) {
    this.iterable = iterable;
  }

  /**
   * Transforms the `collection` to a javascript native array
   *
   * ```js
   * collection = new Collection([1,2,3])
   *
   * console.log(collection.toArray())
   *
   * // output
   * > [1,2,3]
   * ```
   */
  toArray(): any[] {
    return Array.isArray(this.iterable) ? this.iterable : this.iterable.items;
  }

  public [Symbol.iterator]() {
    let index = -1;
    const data = this.toArray();

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
