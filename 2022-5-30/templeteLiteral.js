let classes = "header";

let isTrue = true;

classes = `header ${
  !isTrue ? `` : `icon-${isTrue ? "expander" : "collapser"}`
}`;

// console.log(classes);

let person = "강대국";
let age = 29;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }
  //   console.log(strings);
  return str0 + personExp + str1 + ageStr + str2;
}

let output = myTag`저 사람은 ${person} ${age}이다.`;
let output2 = myTag`That ${person} is a ${age}`;

// console.log(output);

const red = "빨간색";
const blue = "파란색";

function color(strings, ...rest) {
  return strings.reduce(
    (result, string, i) =>
      `${result}${string}${rest[i] ? `<div>${rest[i]}</div>` : ""}`,
    ""
  );
}

const text = color`나는 ${red}보다 ${blue}가 좋아.`;
console.log(text);
