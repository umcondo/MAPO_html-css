function MakeObject(name) {
  // 암묵적으로 {} - 빈객체가 생성되고 this에 바인딩된다.

  // this에 바인딩된 빈 객체에 프로퍼티와 메소드를 입력한다.
  this.name = name;
  this.getName = function () {
    console.log(this.name);
  };

  // this에 바인딩된 객체가 리턴된다.
}

const myName = new MakeObject("강대국");

console.log(myName.name); // '강대국'
myName.getName(); // '강대국'

const name = "대국";
var name2 = "대국";
console.log(this.name2);

console.log(this);

function practiceThis(data) {
  console.log("this는", this);
  this.data = data;
  console.log(this.data);
  console.log(this);
}
// 일반 함수 호출 시 this는 전역객체를 참조한다.
// 전역객체의 프로퍼티로 data를 할당했다.
practiceThis("크흠 this는 시러");
console.log(data);

// 객체의 메소드로 호출할때
const object = {
  data: "강대국",
  practiceThis,
};

// 객체 메소드로 호출할때는 this는 호출하는 객체를 참조한다.
object.practiceThis("국대강");

// 생성자 함수로 쓸때 새롭게 만들어질 인스턴스(빈 객체)를 참조한다.
const object2 = new practiceThis("디핵");
console.log(object2);
console.log(object2.data);

// call, apply 활용
function sum(a, b) {
  console.log(this.data);
  return a + b;
}

const list = [1, 5, 3];

// 새로운 this와 인수들을 받아 함수를 호출한다.
const a = {
  data: "강대국",
};
console.log(sum(...list));
console.log(sum.call(a, ...list));
console.log(sum.apply(a, list));
