const drink = ["와인", "정종", "소주", "데킬라", "위스키", "샴페인", "맥주"];

for (let i = 0; i < drink.length; i++) {
  console.log(i, drink[i]);
}
console.log("----------------------------------------");

drink.forEach((elm, index) => {
  console.log(index, elm);
});

console.log("----------------------------------------");

drink.forEach(readDrink);

function readDrink(elm, index) {
  console.log(index, elm);
}

console.log("----------------------------------------");

for (let i = 0; i < drink.length; i++) {
  if (drink[i] === "소주") {
    console.log(`${drink[i]}는 5000원입니다`);
  }
}

console.log("----------------------------------------");

drink.forEach((elm, index) => {
  if (index === 3 || index === 5) {
    console.log(`${elm} : 5000원`);
  } else if (index === 0) {
    console.log(`${elm} : 8000원`);
  }
});

console.log("----------------------------------------");

for (let i = 0; i < drink.length; i++) {
  if (i === 0) {
    console.log(`${drink[i]} : 20000원`);
  } else if (i === 3) {
    console.log(`${drink[i]} : 30000원`);
  } else {
    console.log(`${drink[i]} : 시가`);
  }
}
