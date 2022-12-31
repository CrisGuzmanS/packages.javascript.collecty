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
  public first(): any {
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
  public count(): number {
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
  public isEmpty(): boolean {
    return !this.items.length
  }

  /**
   * returns a `collection` with the data mapped for each element
   *
   * ```js 
   * let persons = new PersonCollection([{
   *  'name': 'rix'
   * }, {
   *  'name': 'roger'
   * }])
   *
   * const names = persons.map((person: Person) => {
   *  return person.name()
   * })
   * ```
   */
  public map(callback: (item: any) => any): Collection {
    return new Collection(this.items.map(itemElement => callback(this.item(itemElement))))
  }

  /**
   * returns the first element that matches the given callback
   * 
   * ```js
   * let persons = new PersonCollection([{
   *         'name': 'rix'
   *  }, {
   *      'name': 'roger'
   *  }])
   * 
   *  const person = persons.firstWhere((person: Person) => {
   *      return person.name() == "roger"
   *  })
   * 
   * // output
   * > Person { item { name: "roger" } }
   * ```
   */
  public firstWhere(callback: (item: any) => any): any | null {

    for (const item of this) {
      if (callback(item)) {
        return item
      }
    }
    return null
  }
}
