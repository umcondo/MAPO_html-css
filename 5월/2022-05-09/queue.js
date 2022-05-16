class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];

      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }

  push(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
}

const A = new Queue();
const B = [];

console.log(A);
console.log(B);
n = 10000000;

console.time();
for (let i = 0; i < n; i++) {
  A.push(i);
}
console.timeEnd();
console.time();
for (let i = 0; i < n; i++) {
  B.push(i);
}
console.timeEnd();

console.time();
A.popleft();
console.timeEnd();
console.time();
B.shift();
console.timeEnd();

console.time();
A.push(1);
console.timeEnd();
console.time();
B.push(1);
console.timeEnd();
