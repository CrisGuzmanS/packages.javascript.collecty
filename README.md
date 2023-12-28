# Collecty

This is an amazing library that allows you to create collections and iterate over them, allowing you to create functionality for the collections and the elements it iterates over.

## instalation

`npm install collecty`

## basic usge

for example, maybe you could have an array of authors as a json format:

```js
const authorsArray = [
    {
        "name": "Arthur",
        "gender": "male",
        "age": 15
    },
    {
        "name": "Veronica",
        "gender": "female",
        "age": 40
    },
    {
        "name": "Johnson",
        "gender": "male",
        "age": 33
    }
]
```

in the next code, as you can see, you can create your own collection, allowing you to transform each element that it has from an object to your custom Author class

```js
import Collection from 'collecty'


class AuthorCollection extends Collection {

    /**
     * each iteration will return an Author
     * 
     **/
    public item(item:any): Author {
        return new Author(item)
    }

    /**
     * You can create your custom filters for your own collection
     * 
     **/
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

    public gender(): boolean {
        // ... code
    }

    public isLegalAge(): boolean {
        // .. code
    }
}

const authors = new AuthorCollection(authorsArray)
```

In the code above, you can easily get the male or female people with an easy-to-read-syntax:

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

### concat( array: any[] ): void

```js
const collection = new AuthorCollection([
    {
        "name": "Arthur",
        "gender": "male",
        "age": 15
    },
    {
        "name": "Veronica",
        "gender": "female",
        "age": 40
    },
    {
        "name": "Johnson",
        "gender": "male",
        "age": 33
    }
])

collection.concat([{
    "name": "Carl",
    "gender": "male",
    "age": 56
}])

console.log(collection.toArray())

// output
>   [{
        "name": "Arthur",
        "gender": "male",
        "age": 15
    },
    {
        "name": "Veronica",
        "gender": "female",
        "age": 40
    },
    {
        "name": "Johnson",
        "gender": "male",
        "age": 33
    }, {
        "name": "Carl",
        "gender": "male",
        "age": 56
    }]  
```

### contains( callback : (item:any) => any ): boolean

checks if the `collection` contains at least one item which matches with the callback

```js
const collection = new AuthorCollection([{
    "name": "Johnson",
    "gender": "male",
    "age": 33
}, {
    "name": "Carl",
    "gender": "male",
    "age": 56
}])

collection.contains( (author: Author) => author.age() > 50 )

// output
> true

collection.contains((author: Author) => {
    return author.age() < 30
})

// output
> false
```

### count(): number

gets total items in the `collection`

```js
const collection = new AuthorCollection([{
    "name": "Johnson",
    "gender": "male",
    "age": 33
}, {
    "name": "Carl",
    "gender": "male",
    "age": 56
}]);

console.log("total", collection.count())

// output
> total 3
```

### filter( callback: (any) => any ): any

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

### first(): any

gets the first item in the `collection`

```js
const collection = new Collection([1,2,3])
console.log("first element", collection.first())

// output
> first element 1
```



### firstWhere( callback: (any) => any ): any

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

### fromJson( json: string ): Collection

creates a new collection from a json

```js
collection = Collection.fromJson("[1,2,3]")
```

### get(): any

gets the item acording to the given index

```js
const collection = new Collection([1, 2, 3])
console.log(collection.get(1))
 
 \\ output
> 2
```

### isEmpty(): boolean

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

### map( callback: (any) => any ): Collection

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

### pop(item:any): void

```js
let collection = new Collection([1,2,3])

console.log(collection.pop())
// output
> 3

console.log(collection.torray())
// output
> [1,2]
```

### push(item:any): void

push new `item` to the `collection`

```js
let collection = new Collection([1,2,3])

collection.push(4)

collection.toArray()

// output
> [1,2,3,4]
```

### random(): any

gets a random item

```js
collection = new Collection([1,2,3])

console.log(collection.random())

//output
> 3 (obtained randomly)
```

### toArray(): any[]

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
- [ ] notContains method
- [ ] merge method
- [ ] StringCollection class
- [ ] ObjectCollection class
- [ ] NumberCollection class

## Are you a collaborator?

if you whish to collaborate to Collecty, you can pull request to the repository:
[click here to go to the repository](https://github.com/CrisGuzmanS/packages.javascript.collecty)

## How to publish the package?

1. commit the changes:
```
git commit -am <message>
```

2. Change the version
```
npm version <patch | minor | major>
```

3. Login (if not already logged in)
```
npm login
```

4. Publish the package
```
npm publish
```