function Stack() {
    let items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function(element) {
        // 方法會移除並回傳陣列的最後一個元素。此方法會改變陣列的長度。
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
    while(decNumber > 0) {
        // 取餘數
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        // 因為是做二進位的轉換
        // 所以要把傳進來的 decNumber 和 2 做整除
        // 值到 decNumber 小於 0
        decNumber = Math.floor(decNumber / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log( divideBy2(10) )

function baseConverter(decNumber, base) {
    const remStack = new Stack()
    let rem
    let baseString = ''
    // 十進位轉二進位餘數是 0 或 1
    // 十進位轉八進位於數 0 到  7
    // 十進位轉十六進位於數 0 到 9 加上 ABCDEF 對應 10 11 12 13 14 15
    let digits = '0123456789ABCDEF'
    while(decNumber > 0) {
        // 取餘數
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        // 做進位的轉換
        // 所以要把傳進來的 decNumber 和 base 做整除
        // 直到 decNumber 小於 0
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString
}

console.log( baseConverter(1000, 16) )

let a = '0123456789ABCDEF'
console.log(a[10])