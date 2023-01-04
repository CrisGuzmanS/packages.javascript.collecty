# Collecty

This is an amazing library that allows you to create collections and iterate over them, allowing you to create functionality for the collections and the elements it iterates over.

## instalation

`npm install collecty`

## basic usage

```js
import Collection from 'collecty'

const myCollection = new Collection([1,2,3])

console.log(myCollection.toArray())

// output
> [1,2]
```

## advanced usage

for example, maybe you could have an array of authors as a json format:

```js
const authorsArray = [
    {
        "name": "Arthur",
        "gender": "male",
        "age": "15"
    },
    {
        "name": "Veronica",
        "gender": "female",
        "age": "40"
    }
]
```

in the next code, as you can see, you can create your own collection, allowing you to transform each element that it has from an object to your custom Author class

```js
import Collection from 'collecty'

class AuthorCollection extends Collection {
    item(item:any) {
        return new Author(item)
    }

    public malePeople(): AuthorCollection{
        // ... code
    }

    public femalePeople(): AuthorCollection {
        // ... code
    }
}

class Author {
    public item;

    constructor(item:any) {
        this.item = item
    }

    public gender(): bool{
        // ... code
    }

    public isLegalAge(): bool{
        // .. code
    }
}

const authors = new AuthorCollection(authorsArray)
```

as you can see, in the code above, you can easily get the male or female people with an easy-to-read-syntax:

```js
authors.malePeople()
```

and you can know if each person is legal age or not:

```js

for (const author of authors) {
    console.log(author.isLegalAge())
}
```

## available methods

### contains( callback : (item:any) => any )

checks if the `collection` contains at leat one item which match with the callback

```js
const collection = new Collection([1, 2, 3])

const containsThree = collection.contains( (item: number) => item == 3 )

// true

const containsFour = collection.contains((item: number) => {
    return item == 4
})

// false
```

### count()

gets total items in the `collection`

```js
const collection = new Collection([1,2,3]);
console.log("total", collection.count())

// output
> total 3
```

### filter( callback: (any) => any )

returns a new `collection` with the `items` that match with the callback given

```js
let collection = new Collection([1, 2, 3])

let newCollection = collection.filter((item: number) => {
   return item <= 2
})

console.log(newCollection.toArray())
// output
> [1,2]
```

### first()

gets the first item in the `collection`

```js
const collection = new Collection([1,2,3])
console.log("first element", collection.first())

// output
> first element 1
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

### fromJson( json: string )

creates a new collection from a json

```js
collection = Collection.fromJson("[1,2,3]")
```

### get()

gets the item acording to the given index

```js
const collection = new Collection([1, 2, 3])
console.log(collection.get(1))
 
 \\ output
> 2
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

### toArray()

Transforms the collection to a javascript native array

```js
collection = new Collection([1,2,3])

console.log(collection.toArray())

// output
> [1,2,3]
```

## TO-DO list

- [ ] last method
- [ ] flatten method
- [ ] StringCollection class
- [ ] ObjectCollection class
- [ ] NumberCollection class

## Are you a collaborator?

if you whish to collaborate to Collecty, you can pull request to the repository:
[click here to go to the repository](https://github.com/CrisGuzmanS/packages.javascript.collecty)