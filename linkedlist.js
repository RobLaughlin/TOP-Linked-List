export class Node {
    #nextNode;

    Node(value = null, nextNode = null) {
        this.value = value;
        this.#nextNode = nextNode;
    }

    nextNode() {
        return this.#nextNode;
    }
}

export class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;

    LinkedList() {}

    toString() {
        let curNode = this.#head;
        let llStr = "";
        while (curNode !== null) {
            llStr += `(${curNode.value.toString()}) -> `;
        }

        llStr += "null";

        return llStr;
    }
}
