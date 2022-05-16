class Queue {
  constructor() {
    this.queue = {};
    this.point = 0;
    this.rear = 0;
  }
  size() {
    if (this.queue[this.point] === undefined) {
      return 0;
    } else {
      return this.rear - this.point + 1;
    }
  }
  push(value) {
    if (this.size() === 0) {
      this.queue["0"] = value;
    } else {
      this.rear++;
      this.queue[this.rear] = value;
    }
  }

  popleft() {
    let curPoint = this.queue[this.point];
    delete this.queue[this.point];

    if (this.point === this.rear) {
      this.point = 0;
      this.rear = 0;
    } else {
      this.point++;
    }

    return curPoint;
  }
}

const a = new Queue();
console.log(a);
a.push(1);
console.log(a.popleft());
console.log(a);
a.push(2);
a.push(3);
console.log(a);
console.log(a.popleft());
console.log(a);
console.log(a.size());
a.popleft();
a.popleft();
console.log(a);

class Queue2 {
  constructor() {
    this.storage = {};
    this.first = 0;
    this.rear = 0;
  }

  size() {
    if (this.first === undefined) {
      return 0;
    }
    return this.rear - this.first + 1;
  }

  push(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear++;
      this.storage[this.rear] = value;
    }
  }

  popleft() {
    let cur = this.storage[this.first];
    delete this.storage[this.first];

    if (this.first === this.rear) {
      this.first = 0;
      this.rear = 0;
    } else {
      first++;
    }
    return cur;
  }
}
