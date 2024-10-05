class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  };

}
let q = new Queue();
q.enqueue("Alice");
q.enqueue("Bob");
q.enqueue("Carol");
console.log(q);
q.enqueue("Derek");
console.log(q);
let first = q.dequeue();
console.log(first);
let next = q.peek();
console.log(next);
