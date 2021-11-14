function Stack() {
    let items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function(element) {
        return items.pop(element)
    }

    this.peek = function(element) {
        return items[items.length - 1]
    }

    this.isEmpty = function(element) {
        return items.length === 0
    }

    this.size = function(element) {
        return items.length
    }

    this.clear = function() {
        items = []
    }

    this.print = function() {
        console.log(items.toString())
        return items.toString()
    }
    this.toString = function(){
        return items.toString();
    }
    
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)

console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()

console.log(stack.size())


console.log(stack.print())

function divideBy2(decNumber) {
    const remStack = new Stack()
    let rem
    let binaryString = ''
    console.log(decNumber)
    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
  
    while(!remStack.isEmpty()) {
        console.log(remStack.print())
        binaryString += remStack.pop().toString()
    }

  

    return binaryString
}

console.log( divideBy2(10) )