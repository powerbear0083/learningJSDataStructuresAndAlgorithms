# learningJSDataStructuresAndAlgorithms

## Chapter 2 Array
* sort() 對一個陣列的所有元素進行排序，並回傳此陣列。
```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
})
console.log(numbers)

function compare(a, b) {
  if (a < b) { // a 排在 b 的前面
    return -1;
  }
  if (a > b) { // b 排在 a 的前面
    return 1;
  }
  // a 必須等於 b
  return 0;
}

```
## Chapter 3 堆疊 Stack 
* 堆疊是一種遵從後進先出 (LIFO) 原則的有序集合。後面來的先出去。
* 有兩種資料結構類似於陣列，在添加或刪除元素時更為可控，它們是堆疊和佇列 Stack and Queue


## Chapter 4 佇列
* 先進先出 (FIFO) First In First Out，佇列在尾部添加新元素，並從頂部移除元素。先來的先做。
