/**
 * A singly linked list is a data structure composed of nodes that point to the next item.
 * Each node contains a value, and a reference to the next node.
 * A doubly linked list contains a previous pointer as well.
 */

type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    /**
     * 
     * @param item 
     * @param idx 
     * 
     * 1. Traverse linked list upto idx - 1 nodes
     * 2. Once at idx - 1, allocate mem and given data (item) to new node
     * 3. Point next pointer of new node to next pointer of current node
     * 4. Point next pointer of current node to new node
     */
    insertAt(item: T, idx: number): void {
        const newNode = { value: item } as Node<T>;

        // If idx = 1. new node is set infront of head
        if (idx === 1) {
            this.prepend(newNode.value);
            return;
        }

        let currentNode = this.head;

        while (idx-- !== 0) {
            if (idx === 1) {
                newNode.next = currentNode?.next;
                (currentNode as Node<T>).next = newNode;
                break;
            }

            currentNode = currentNode?.next
        }
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {

    }

    get(idx: number): T | undefined {

    }

    removeAt(idx: number): T | undefined {

    }
}