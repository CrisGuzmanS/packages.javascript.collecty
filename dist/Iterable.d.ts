export default class Iterable {
    items: any[];
    index: number;
    constructor(items: any[]);
    [Symbol.iterator](): {
        next: () => {
            value: any;
            done: boolean;
        };
    };
    item(item: any): any;
}
