let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const id_report_list = {};
const id_report_list2 = {};
const id_report_count = {};
const id_count_bigger_k = [];
const id_list = ["muzi", "frodo", "apeach", "neo"];
const k = 2;
const arrest = [];
report = report.map((elm) => {
  //   elm.split(" ");
  return elm.split(" ");
});

// console.log(report);

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
// console.log(id_report_list);

for (let i = 0; i < id_list.length; i++) {
  if (id_report_list[id_list[i]]) {
    id_report_count[id_list[i]] = id_report_list[id_list[i]].length;
  } else {
    id_report_count[id_list[i]] = 0;
  }
}
console.log(id_report_count);

for (let i = 0; i < id_list.length; i++) {
  if (id_report_count[id_list[i]] >= k) {
    arrest.push(id_list[i]);
  }
}
console.log(arrest);

console.log(id_report_list2);
