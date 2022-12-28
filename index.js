class Iterable {

    constructor(items) {
        this.items = items
    }

    [Symbol.iterator]() {

        var index = -1
        var data = this.items

        return {
            next: () => ({

                value: this.item(data[++index]),
                done: !(index in data)
            })
        }
    }

    item(item) {
        return item
    }
}

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

console.log("total", collection.count())