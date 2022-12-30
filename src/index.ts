import Iterable from './Iterable';

export default class Collection extends Iterable {

  /**
   * gets the first item in the `collection`
   * 
   * ```js
   * const collection = new Collection([1,2,3])
   * console.log("first element", collection.first())
   * // > first element 1
   * ```
   */
  first() {
    return this.item(this.items[0]);
  }

  /**
   * gets total items in the `collection`
   * 
   * ```js
  * const collection = new Collection([1,2,3]);
  * console.log("total", collection.count())
  * // > total 3
  * ```
   */
  count(): number {
    return this.items.length;
  }

  contains(param: any) {
    if (typeof param === 'function') {
      for (const item in this) {
        if (param(item)) {
          return true;
        }
      }
      return false;
    }

    for (const item in this.items) {
      if (item === param) {
        return true;
      }
    }
    return false;
  }
}
