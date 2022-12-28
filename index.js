import Iterable from './Iterable.js'

class Collection extends Iterable {

    first() {
        return this.item(this.items[0])
    }

    count() {
        return this.items.length
    }
}

class NumberCollection extends Collection {
    item(item) {
        return new Number(item)
    }
}

class Number {
    constructor(item) {
        this.item = item
    }

    squared() {
        return this.item * this.item
    }
}

const collection = new NumberCollection([1, 2, 3, 4, 5])

for (const number of collection) {
    console.log(number.squared())
}
for (const number of collection) {
    console.log(number.squared())
}