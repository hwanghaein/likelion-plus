import Lens from "./interface/Lens.js";
let lens = new Lens();
lens.zoomIn(1);
lens.zoomOut(1);
let msg = "hello"; // any와는 다르게 unknown은 조건 검사를 함 // 여러 형식 담을 때는 unknown 써서 검사해야함. 타입의 기능을 쓸때는 형식을 비교하고 써야함.
// 조건 검사하는게 불편하면, 타입 단언 사용 (형변환한다고 생각하면됨)
// if (typeof msg === "string") msg.toUpperCase();
console.log(msg.toUpperCase()); // 검사할 필요 없을때, 강제로 string 취급
// const myCanvas = document.getElementById("main_canvas");
;
let value = "Hello";
value = "abc"; // 가능
const a = 1234; // 가능
// const b : ID = "abc" // 에러
let x = "hi";
x = "hi";
// x = "no" // 에러 
let level;
level = 1;
let user = { name: "혜인", age: 29 };
console.log(user);
let nums = [1, 2, 3, 4, 5];
// nums.push("hello");
console.log(nums);
// nums.push(6);
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}
greet("haein", new Date());
