export class Stack<T = any> {
    #items: Array<T>;

    constructor() {
        this.#items = [] as T[];
    }

    add(element: T) {
        return this.#items.push(element);
    }

    remove() {
        if (this.#items.length > 0) {
            return this.#items.pop();
        }
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length == 0;
    }

    size() {
        return this.#items.length;
    }

    clear() {
        this.#items = [];
    }
}

