import Collection from '../src'

class NumberCollection extends Collection {
    item(item) {
        return new Number(item)
    }
}

class Number {

    public item;

    constructor(item) {
        this.item = item
    }
}

test('test one is one', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    expect(collection.count()).toBe(5);
});