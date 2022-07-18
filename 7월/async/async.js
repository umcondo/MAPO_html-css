// async, await
// clear style of using promise !!

// 1. Promise
// function fetchUser() {
//   // 10초 걸림 데이터 받아오는데

//   return new Promise((resolve, reject) => {
//     resolve("ellie");
//   });
// }

// 2. async
async function fetchUser() {
  // 10초 걸림 데이터 받아오는데

  return "ellie";
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 3. await - 기다려

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

// // 콜백지옥과 비슷
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// pickFruits().then(console.log);

async function pickFruits() {
  // 프로미스는 선언 동시에 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;
  //   const apple = await getApple();
  //   const banana = await getBanana();

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // 모든 프로미스들을 가져오면 배열 반환
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// 먼저 받아오는 것 받아오기
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
