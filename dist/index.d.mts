declare class Iterable {
    items: any[];
    index: number;
    constructor(items: any[]);
    [Symbol.iterator](): {
        next: () => {
            value: any;
            done: boolean;
        };
    };
    item(item: any): any;
}

declare class Collection extends Iterable {
    /**
     * clones the `collection`
     *
     * const collection = new Collection([1,2,3])
     * const newCollection = collection.clone() // newCollection has the same items than collection
     */
    clone(): Collection;
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
    concat(array: any[]): void;
    /**
     *
     */
    contains(callback: (item: any) => boolean): boolean;
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
    count(): number;
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
    filter(callback: (item: any) => any): Collection;
    /**
     * gets the first item in the `collection`
     *
     * ```js
     * const collection = new Collection([1,2,3])
     * console.log("first element", collection.first())
     * // > first element 1
     * ```
     */
    first(): any;
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
    firstWhere(callback: (item: any) => any): any | null;
    /**
     * creates a new collection from an array (does the same than new Collection(...))
     *
     * const collection = Collection.fromArray([1,2,3])
     */
    static fromArray(array: any[]): Collection;
    /**
     * creates a new `collection` from a json
     *
     * ```js
     * collection = Collection.fromJson("[1,2,3]")
     * ```
     */
    static fromJson(json: string): Collection;
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
    get(index: number): any;
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
    isEmpty(): boolean;
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
    map(callback: (item: any) => any): Collection;
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
    pop(): any;
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
    push(element: any): void;
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
    random(): any;
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
    toArray(): any[];
}

export { Collection as default };
