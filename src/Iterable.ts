export default class Iterable {

    public items;

    constructor(items:any) {
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

    item(item:any) {
        return item
    }
}