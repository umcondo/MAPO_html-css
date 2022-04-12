let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
// let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// 신고 당한 리스트
const id_report_list = {};
// 신고한 리스트
const id_report_list2 = {};
// 사람당 신고당한 카운트
const id_report_count = {};
// k번 이상 신고당한 사람
const id_count_bigger_k = [];
// 사람들 아이디
const id_list = ["muzi", "frodo", "apeach", "neo"];
// const id_list = ["con", "ryan"];
const k = 3;
// 탈퇴 당한 사람
const arrest = [];
// 아이디당 처리 결과 횟수
const result = [];

const a = {};

report.map((elm) => {
  a[elm.split(" ")[0]] = elm.split(" ")[1];
});
// report.sort();
report = report.map((elm) => {
  //   elm.split(" ");
  return elm.split(" ");
});

console.log(a);
console.log(report);

// 신고당한 리스트
for (let i = 0; i < report.length; i++) {
  if (
    id_report_list[report[i][1]] &&
    !id_report_list[report[i][1]].includes(report[i][0])
  ) {
    id_report_list[report[i][1]].push(report[i][0]);
  } else {
    id_report_list[report[i][1]] = [report[i][0]];
  }
}

for (let i = 0; i < report.length; i++) {
  if (
    id_report_list2[report[i][0]] &&
    !id_report_list2[report[i][0]].includes(report[i][1])
  ) {
    id_report_list2[report[i][0]].push(report[i][1]);
  } else {
    id_report_list2[report[i][0]] = [report[i][1]];
  }
}

for (let i = 0; i < id_list.length; i++) {
  if (id_report_list[id_list[i]]) {
    id_report_count[id_list[i]] = id_report_list[id_list[i]].length;
  } else {
    id_report_count[id_list[i]] = 0;
  }
}

for (let i = 0; i < id_list.length; i++) {
  if (id_report_count[id_list[i]] >= k) {
    arrest.push(id_list[i]);
  }
}

// k번 이상 신고된 사람
console.log("신고당한 사람", id_report_list);
console.log("신고한 사람", id_report_list2);
console.log("신고당한 횟수", id_report_count);
console.log("정지당한 사람", arrest);
console.log("k", k);
// console.log(id_report_list2);

for (let i = 0; i < id_list.length; i++) {
  let a = 0;
  if (id_report_list2[id_list[i]]) {
    id_report_list2[id_list[i]].forEach((elm) => {
      if (arrest.includes(elm)) {
        a += 1;
      }
    });
  }
  result.push(a);
}

console.log("결과", result);
