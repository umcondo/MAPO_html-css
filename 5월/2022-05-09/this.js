// "use strict";
let user = {
  name: "john",
  age: 30,
};

user.sayHi = function () {
  console.log("sup");
};

user.sayHi();

user = {
  sayHi: function () {
    console.log("hello");
  },
};

user.sayHi();

user = {
  name: "강대국",
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi();

function sayHi() {
  console.log(this.name);
}

user["sayHi"]();

let user2 = {
  firstName: "보라",
  sayHi() {
    let arrow = function () {
      console.log(this.firstName);
    };
    arrow();
  },
};
user2.sayHi();

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user3 = makeUser();

console.log(user3.ref().name);

let calculator = {
  read() {
    this.a = window.prompt("값을 입력해주세요");
    this.b = window.prompt("값을 입력해주세요");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log(this.step);
  },
};

ladder
  .up()

  .up()
  .down()
  .showStep();

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

console.log(typeof User);

console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);

console.log(Object.getOwnPropertyNames(User.prototype));

class User5 {
  constructor() {}
}

console.log(User5);
