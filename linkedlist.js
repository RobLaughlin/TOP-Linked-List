export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;

    constructor() {}

    size() {
        return this.#size;
    }

    append(value) {
        // console.log(value);
        if (this.#size === 0) {
            this.#head = new Node(value, null);
            this.#tail = this.#head;
        } else {
            this.#tail.nextNode = new Node(value);
            this.#tail = this.#tail.nextNode;
        }
        this.#size++;
    }

    prepend(value) {
        if (this.size() === 0) {
            this.#head = new Node(value, null);
            this.#tail = this.#head;
        } else {
            const oldHead = new Node(this.#head.value, this.#head.nextNode);
            this.#head = new Node(value, oldHead);
        }
        this.#size++;
    }

    head() {
        return this.#head;
    }

    tail() {
        return this.#tail;
    }

    at(index) {
        if (index >= this.#size) {
            throw new RangeError(
                `Index (${index}) must be strictly less than the size of the linked list (${
                    this.#size
                })`
            );
        }

        let i = 0;
        let curNode = this.#head;
        while (i < index) {
            curNode = curNode.nextNode;
            i++;
        }

        return curNode;
    }

    contains(value) {
        let curNode = this.#head;
        while (curNode !== null) {
            if (curNode.value === value) {
                return true;
            }
            curNode = curNode.nextNode;
        }

        return false;
    }

    find(value) {
        let curNode = this.#head;
        let i = 0;
        while (curNode !== null) {
            if (curNode.value === value) {
                return i;
            }
            curNode = curNode.nextNode;
            i++;
        }

        return null;
    }

    insertAt(value, index) {
        if (index >= this.#size || index < 0) {
            throw new RangeError(
                `Index (${index}) must be strictly less than the size of the linked list (${
                    this.#size
                }) and strictly greater than 0.`
            );
        }

        const newNode = new Node(value);
        if (index === 0) {
            newNode.nextNode = this.#head;
            this.#head = newNode;
        } else if (index === this.#size - 1) {
            this.#tail.nextNode = newNode;
            this.#tail = newNode;
        } else {
            const prevNode = this.at(index - 1);
            const newNextNode = prevNode.nextNode;
            prevNode.nextNode = newNode;
            newNode.nextNode = newNextNode;
        }
    }

    toString() {
        let curNode = this.#head;
        let llStr = "";
        while (curNode !== null) {
            llStr += `(${curNode.value}) -> `;
            curNode = curNode.nextNode;
        }

        llStr += "null";

        return llStr;
    }
}
