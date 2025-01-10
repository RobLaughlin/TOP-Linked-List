import { LinkedList } from "./linkedlist.js";

function printLinkedListStatus(linkedlist) {
    console.log(`Linked list: ${linkedlist.toString()}`);
    console.log(`Size: ${linkedlist.size()}\n`);
}

function testLinkedList(ll, numTests) {
    for (let i = 0; i < numTests; i++) {
        ll.append(i);
        printLinkedListStatus(ll);
    }

    for (let i = -numTests; i < 0; i++) {
        ll.prepend(i);
        printLinkedListStatus(ll);
    }

    for (let i = 0; i < 2 * numTests; i++) {
        console.log(`Value at index: ${i}: ${ll.at(i).value}`);
    }

    const foundTests = [-1, -numTests, 0, numTests - 1, numTests];
    foundTests.forEach((test) => {
        console.log(`There is a ${test} at index: ${ll.find(test)}`);
    });

    console.log(`Inserting ${"A"} at index 0...`);
    ll.insertAt("A", 0);
    printLinkedListStatus(ll);

    console.log(`Inserting ${"B"} at index ${numTests}...`);
    ll.insertAt("B", numTests);
    printLinkedListStatus(ll);

    console.log(`Inserting ${"C"} at index ${2 * numTests - 1}...`);
    ll.insertAt("C", 2 * numTests - 1);
    printLinkedListStatus(ll);
}

function init() {
    const NUM_TESTS = 5;

    const ll = new LinkedList();
    printLinkedListStatus(ll);

    testLinkedList(ll, NUM_TESTS);
}

init();
