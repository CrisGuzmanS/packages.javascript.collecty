# Collecty

This is an amazing library that allows you to create collections and iterate over them, allowing you to create functionality for the collections and the elements it iterates over.

## basic usage

1. in the console, you need to install the package:

`npm install collecty`

2. use the package:

```js
import Collection from 'collecty'

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

    public isPair(): bool{
        return this.item % 2 == 0
    }
}

const numbers = new NumberCollection([1,2,3,4,5])

for (const item of numbers) {
    console.log(item.isPair())
}

//output
> false
> true
> false
> true
> false
```

## available methods

### first()

gets the first item in the `collection`

```js
const collection = new Collection([1,2,3])
console.log("first element", collection.first())

// output
> first element 1
```

### count()

gets total items in the `collection`

```js
const collection = new Collection([1,2,3]);
console.log("total", collection.count())

// output
> total 3
```

### firstWhere( callback: (any) => any )

gets the first item which match with the callback condition

```js
let persons = new PersonCollection([{
        'name': 'rix'
 }, {
     'name': 'roger'
 }])

 const person = persons.firstWhere((person: Person) => {
     return person.name() == "roger"
 })

// output
> Person { item { name: "roger" } }
```

### toArray()

Transforms the collection to a javascript native array

```js
collection = new Collection([1,2,3])

console.log(collection.toArray())

// output
> [1,2,3]
```

### isEmpty()

checks if the collection has at least one item

```js
const collection = new Collection([1,2,3])
console.log(collection.isEmpty())

// output
> false
```

```js
const collection = new Collection([])
console.log(collection.isEmpty())

// output
> true
```

### map( callback: (any) => any )

returns a collection with the data mapped for each element

```js 
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

    public name() {
        return this.item.name
    }
}

let persons = new PersonCollection([{
    'name': 'rix'
}, {
    'name': 'roger'
}])

const names = persons.map((person: Person) => {
    return person.name()
})
```

## TO-DO list

- [ ] filter method
- [ ] flatten method
- [ ] toArray method
- [ ] fromJson method
- [ ] StringCollection class
- [ ] ObjectCollection class
- [ ] numberCollection class

## Are you a collaborator?

if you whish to collaborate to my package, you can pull request to the repository:
[click here to go to the repository](https://github.com/CrisGuzmanS/packages.javascript.collecty)