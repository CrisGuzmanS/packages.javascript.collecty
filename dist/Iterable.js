"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterable {
    constructor(items) {
        this.index = -1;
        this.items = items;
    }
    [Symbol.iterator]() {
        let index = -1;
        const data = this.items;
        return {
            next: () => ({
                value: this.item(data[++index]),
                done: !(index in data),
            }),
        };
    }
    item(item) {
        return item;
    }
}
exports.default = Iterable;
