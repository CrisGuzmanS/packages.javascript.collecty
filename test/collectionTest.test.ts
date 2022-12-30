import Collection from '../src'

class NumberCollection extends Collection {
    item(item:any) {
        return new Number(item)
    }
}

class Number {

    public item;

    constructor(item:any) {
        this.item = item
    }
}

test('test count method', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    expect(collection.count()).toBe(5);
});

test('test iteration', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    for (const item of collection) {
        console.log(item)
    }

});