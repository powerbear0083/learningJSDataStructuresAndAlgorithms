class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        // 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('john')
queue.enqueue('jack')
queue.enqueue('camila')
queue.print()
console.log(queue.size());
queue.dequeue()
queue.dequeue()
queue.print()