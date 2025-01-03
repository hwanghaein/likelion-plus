// import { readFile } from 'node:fs';
const fs = require("fs");

// 비동기 : 줄안세운다. 버퍼 사용
// fs.readFile('data.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// 동기 : 줄세운다. 한놈만 실행
let data = fs.readFileSync('data.txt')
console.log(data.toString());
 

let x = 30;
let y = 20;
let result = x + y;
console.log(result);                                                                                                          