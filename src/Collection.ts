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
   * clones the `collection`
   * 
   * const collection = new Collection([1,2,3])
   * const newCollection = collection.clone() // newCollection has the same items than collection
   */
  public clone(): Collection {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  public contains(callback: (item: any) => boolean): boolean {

    for (const item of this) {
      if (callback(item)) {
        return true
      }
    }

    return false
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
   * returns a new `collection` with the `items` that match with the callback given
   * 
   * ```js
   * let collection = new Collection([1, 2, 3])
   *
   * let newCollection = collection.filter((item: number) => {
   *    return item <= 2
   * })
   * 
   * console.log(newCollection.toArray())
   * // output
   * > [1,2]
   * ```
   */
  filter(callback: (item: any) => any): Collection {
    const newItems = []

    for (const [index, element] of this.items.entries()) {
      const currentItem = this.item(this.items[index])

      if (callback(currentItem)) {
        newItems.push(this.items[index])
      }
    }

    const clone = this.clone()

    clone.items = newItems

    return clone
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
   * returns the first `item` that matches the given callback
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
  public toArray(): any[] {
    return this.items
  }

  public static fromArray(array: any[]): Collection {
    return new this(array)
  }

  /**
   * creates a new `collection` from a json
   * 
   * ```js
   * collection = Collection.fromJson("[1,2,3]")
   * ```
   */
  public static fromJson(json: string): Collection {
    return new this(JSON.parse(json))
  }
}