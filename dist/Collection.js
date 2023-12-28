import Iterable from './Iterable';
export default class Collection extends Iterable {
    /**
     * clones the `collection`
     *
     * const collection = new Collection([1,2,3])
     * const newCollection = collection.clone() // newCollection has the same items than collection
     */
    clone() {
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
    concat(array) {
        this.items = this.items.concat(array);
    }
    /**
     *
     */
    contains(callback) {
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
    count() {
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
    filter(callback) {
        const newItems = [];
        for (const [index, element] of this.items.entries()) {
            const currentItem = this.item(this.items[index]);
            if (callback(currentItem)) {
                newItems.push(this.items[index]);
            }
        }
        const clone = this.clone();
        clone.items = newItems;
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
    first() {
        return this.item(this.items[0]);
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
    firstWhere(callback) {
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
    static fromArray(array) {
        return new this(array);
    }
    /**
     * creates a new `collection` from a json
     *
     * ```js
     * collection = Collection.fromJson("[1,2,3]")
     * ```
     */
    static fromJson(json) {
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
    get(index) {
        return this.item(this.items[index]);
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
    isEmpty() {
        return !this.items.length;
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
    map(callback) {
        return new Collection(this.items.map((itemElement) => callback(this.item(itemElement))));
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
    pop() {
        return this.item(this.items.pop());
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
    push(element) {
        this.items.push(element);
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
    random() {
        const index = Math.floor(Math.random() * this.items.length);
        return this.item(this.items[index]);
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
    toArray() {
        return this.items;
    }
}
