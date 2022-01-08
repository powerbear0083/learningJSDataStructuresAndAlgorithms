class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        // 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。
        let result = this.items.shift()
        console.log(result);
        return result
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
function hotPotato(nameList, num) {
    let queue = new Queue()
    
    for(let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    let eliminated = ''
    console.log(queue.size());
    while( queue.size() > 1 ) {
        for(let i = 0; i < num; i++) {
            // 把陣列中第一個要移除的元素 
            // 先 push 到陣列中
            queue.enqueue(queue.dequeue())
        }
        // 剩下的元素就是被淘汰
        eliminated = queue.dequeue()
        console.log(`${eliminated} game over`);
    }
    console.log(eliminated);

    return queue.dequeue()
}
const names = ['john', 'jack']
const win = hotPotato(names, 2)
console.log(win );

console.log(names.shift());