function PriorityQueue() {
    let items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.isEmpty = function() {
        return items.length === 0
    }
    this.print = function()  {
        console.log(items)
    }
    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)

        // 佇列為空，直接加入佇列
        if(this.isEmpty()) {
            items.push(queueElement)
        } else {
            let added = false
            for(let i = 0; i < items.length; i++) {
                // 最小優先佇列
                // 當傳入的優先級小於陣列中的優先級
                // 就把剛傳入的元素往當前的 index 插入
                if(queueElement.priority < items[i].priority) {
                    // splice 藉由刪除既有元素並／或加入新元素來改變一個陣列的內容
                    console.log(queueElement)
                    console.log(i)
                    items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            
            //  要傳入的元素大於陣列中的所有元素，直接 push 
            if(!added) {
                console.log(queueElement)
               
                items.push(queueElement)
            }
        }
    }
}


let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('john', 2)
priorityQueue.enqueue('jack', 1)
priorityQueue.enqueue('camila', 3)

priorityQueue.print()