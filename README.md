# Collecty

This is an amazing library that allows you to create collections and iterate over them, allowing you to create functionality for the collections and the elements it iterates over.

## basic usage

1. in the console, you need to install the package:

`npm install collecty`

2. use the package:

        import Collection from 'collecty'

        class NumberCollection extends Collection
    
        class NumberCollection {
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

        output
        > false
        > true
        > false
        > true
        > false