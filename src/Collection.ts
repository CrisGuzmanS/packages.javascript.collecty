import Iterable from './Iterable';

export default class Collection extends Iterable {

  set(array: any[]) {
    Array.isArray(this.iterable) ? (this.iterable = array) : (this.iterable.items = array);
  }

  /**
   * clones the `collection`
   *
   * const collection = new Collection([1,2,3])
   * const newCollection = collection.clone() // newCollection has the same items than collection
   */
  public clone(): Collection {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  /**
   * concacts the given array to the `collection`
   *
   * ```js
   * const collection = new Collection([1,2,3])
   *
   * collection.concat([4,5,6])
   *
   * console.log(collection.toArray())
   * // output
   * > [1, 2, 3, 4, 5, 6]
   * ```
   */
  public concat(array: any[]): void {
    this.set(this.toArray().concat(array))
  }

  /**
   *
   */
  public contains(callback: (item: any) => boolean): boolean {
    for (const item of this) {
      if (callback(item)) {
        return true;
      }
    }

    return false;
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
    return this.toArray().length;
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
  public filter(callback: (item: any) => any): Collection {
    const newItems = [];

    for (const [index,] of this.toArray().entries()) {
      const currentItem = this.item(this.toArray()[index]);

      if (callback(currentItem)) {
        newItems.push(this.toArray()[index]);
      }
    }

    const clone = this.clone();

    clone.set(newItems);

    return clone;
  }

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
    if (!this.toArray().length) {
      return null;
    }
    return this.item(this.toArray()[0]);
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
        return item;
      }
    }
    return null;
  }

  /**
   * creates a new collection from an array (does the same than new Collection(...))
   *
   * const collection = Collection.fromArray([1,2,3])
   */
  public static fromArray(array: any[]): Collection {
    return new this(array);
  }

  /**
   * creates a new `collection` from a json
   *
   * ```js
   * collection = Collection.fromJson("[1,2,3]")
   * ```
   */
  public static fromJson(json: string): Collection {
    return new this(JSON.parse(json));
  }

  /**
   * gets the item acording to the given index
   *
   * ```js
   * const collection = new Collection([1, 2, 3])
   * console.log(collection.get(1))
   *
   *  \\ output
   * > 2
   * ```
   */
  public get(index: number): any {
    return this.item(this.toArray()[index]);
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
    return !this.toArray().length;
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
    return new Collection(this.toArray().map((itemElement) => callback(this.item(itemElement))));
  }

  /**
   * returns the last `item` and removes it from the `collection`
   *
   * ```js
   * let collection = new Collection([1,2,3])
   *
   * console.log(collection.pop())
   * // output
   * > 3
   *
   * console.log(collection.torray())
   * // output
   * > [1,2]
   * ```
   */
  public pop(): any {
    const newArray = this.toArray();

    const element = newArray.pop();

    this.set(newArray);

    return this.item(element);
  }

  /**
   * push new `item` to the `collection`
   *
   * ```js
   * let collection = new Collection([1,2,3])
   *
   * collection.push(4)
   *
   * collection.toArray()
   *
   * // output
   * > [1,2,3,4]
   * ```
   */
  public push(element: any): void {
    const array = this.toArray();
    array.push(element)
    this.set(array);
  }

  /**
   * gets a random item
   *
   * ```js
   * collection = new Collection([1,2,3])
   *
   * console.log(collection.random())
   * //output
   * > 3 (obtained randomly)
   * ```
   *
   */
  public random(): any {
    const index = Math.floor(Math.random() * this.toArray().length);
    return this.item(this.toArray()[index]);
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


  public where(attribute: string, value: any): Collection {
    return this.filter((item: any) => item[attribute] === value);
  }

}
