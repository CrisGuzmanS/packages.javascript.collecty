import { Collection } from '../src'

class NumberCollection extends Collection {
    item(item: any): Number {
        return new Number(item)
    }
}

class PersonCollection extends Collection {
    item(item: any): Person {
        return new Person(item)
    }
}

class Person {

    private item;

    constructor(item: any) {
        this.item = item
    }

    get name() {
        return this.item.name
    }

    toString() {
        return this.item
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

test('test "count" method', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    expect(collection.count()).toBe(5);
});

test('test collection iteration', () => {

    const collection = new NumberCollection([1, 2, 3, 4, 5])

    let value = 1

    for (const item of collection) {
        expect(item.value()).toBe(value)
        value++
    }

});

test('test "is empty" method', () => {

    let numbers = new NumberCollection([1, 2, 3, 4, 5])
    expect(numbers.isEmpty()).toBe(false)

    numbers = new NumberCollection([])
    expect(numbers.isEmpty()).toBe(true)
});

test('test "map" method', () => {

    let persons = new PersonCollection([{
        'name': 'rix'
    }, {
        'name': 'roger'
    }])

    const names = persons.map((person: Person) => {
        return person.name
    })

    expect(names.first()).toBe("rix")

});

test('test "first where" method', () => {

    let persons = new PersonCollection([{
        'name': 'rix'
    }, {
        'name': 'roger'
    }])

    const person = persons.firstWhere((person: Person) => {
        return person.name == "roger"
    })

    expect(person.name).toBe("roger")

});

test('test "is array" method', () => {

    let collection = new Collection([])

    expect(Array.isArray(collection.toArray())).toBe(true)
})

test('test "from json" method', () => {

    let collection = Collection.fromJson("[1,2,3]")

    expect(collection.count()).toBe(3)
})

test('test "clone" method', () => {

    let collection = new Collection([1, 2, 3])
    let collectionClone = collection.clone()

    expect(collectionClone.count()).toBe(collection.count())
})

test('test "filter" method', () => {

    let collection = new Collection([1, 2, 3])

    let newCollection = collection.filter((item: number) => {
        return item <= 2
    })

    expect(newCollection.count()).toBe(2)
})

test('test "contains" method', () => {

    const collection = new Collection([1, 2, 3])

    const containsThree = collection.contains((item: number) => {
        return item == 3
    })

    expect(containsThree).toBe(true)

    const containsFour = collection.contains((item: number) => {
        return item == 4
    })

    expect(containsFour).toBe(false)
})

test('test "get" method', () => {

    const collection = new Collection([1, 2, 3])

    const two = collection.get(1)

    expect(two).toBe(2)
})

test('test "push" method', () => {

    const collection = new Collection([1, 2, 3])

    collection.push(4)

    expect(collection.count()).toBe(4)
})

test('test "pop" method', () => {

    const collection = new Collection([1, 2, 3])

    const three = collection.pop()

    expect(three).toBe(3)

    expect(collection.count()).toBe(2)
})

test('test "concat" method', () => {

    const collection = new Collection([1, 2, 3])

    collection.concat([4, 5, 6])

    expect(collection.count()).toBe(6)

})

test('test "random" method', () => {

    const collection = new Collection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

    const firstNumber = collection.random()
    const secondNumber = collection.random()

    expect(typeof firstNumber).toBe("number")
    expect(firstNumber === secondNumber).toBe(false)

})


test('test "where" method', () => {
    let persons = new PersonCollection([{
        'name': 'rix'
    }, {
        'name': 'roger'
    }])

    const person = persons.where("name", "rix").first()

    expect(person.name).toBe("rix")
})

test('test "array" method', () => {

    const items = [{
        'name': 'rix'
    }, {
        'name': 'roger'
    }]

    const iterable = {
        items: items,
        links: {
            next: null,
            prev: null,
            self: null,
        }
    }

    let persons = new PersonCollection(iterable)

    expect(Array.isArray(persons.toArray())).toBe(true)
})

test('test "pluck" method', () => {
    let persons = new PersonCollection([{
        'name': 'rix',
        'age': 25,
        'city': 'berlin'
    }, {
        'name': 'roger',
        'age': 30,
        'city': 'berlin'
    }])

    expect(persons.pluck('name').first()).toBe('rix');
    expect(persons.pluck('name', 'age').first().age).toBe(25);
    expect(persons.pluck('name', 'city').first().age).toBe(undefined);
})

test('test "unique" method', () => {
    let persons = new PersonCollection([{
        'name': 'rix',
        'age': 25
    }, {
        'name': 'rix',
        'age': 25
    }, {
        'name': 'rix',
        'age': 25
    }, {
        'name': 'roger',
        'age': 30
    }])

    expect(persons.count()).toBe(4);

    expect(persons.unique().count()).toBe(2);
})