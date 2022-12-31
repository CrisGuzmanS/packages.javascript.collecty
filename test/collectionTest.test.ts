import Collection from '../src'

class NumberCollection extends Collection {
    item(item: any): Number {
        return new Number(item)
    }
}

class Number {

    public item;

    constructor(item: number) {
        this.item = item
    }

    value() {
        return this.item
    }
}

test('test count method', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    expect(collection.count()).toBe(5);
});

test('test iteration', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    let value = 1
    for (const item of collection) {
        expect(item.value()).toBe(value)
        value++
    }

});

test('test is empty method', () => {

    let numbers = new NumberCollection([1, 2, 3, 4, 5])
    expect(numbers.isEmpty()).toBe(false)

    numbers = new NumberCollection([])
    expect(numbers.isEmpty()).toBe(true)
});