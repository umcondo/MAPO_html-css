let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

let sum = 0;

// while (true) {
//   let value = +prompt("숫자를 입력하세요.", "");

//   if (!value) break;

//   sum += value;
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = i + j;
//     console.log(input);

//     if (input === 4) break outer;
//   }
// }

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

let j = 0;
while (3 - j) {
  console.log(`number ${j}!`);
  j++;
}

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }
  console.log(i);
}
