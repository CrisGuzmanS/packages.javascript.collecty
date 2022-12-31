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
   * 
   * console.log("total", collection.count())
   * 
   * // output
   * > total 3
   * ```
   */
  count(): number {
    return this.items.length;
  }

  /**
   * checks if the `collection` is empty
   * 
   * ```js
   * const collection = new Collection([1,2,3])
   * console.log(collection.isEmpty())
   * 
   * // output
   * > false
   * ```
   * 
   * ```js
   * const collection = new Collection([])
   * console.log(collection.isEmpty())
   * 
   * // output
   * > true
   * ```
   */
  isEmpty(): boolean {
    return !this.items.length
  }
}
