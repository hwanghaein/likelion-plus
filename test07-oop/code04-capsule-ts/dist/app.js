var msg = "hello"; // any와는 다르게 unknown은 조건 검사를 함 
if (typeof msg === "string")
    msg.toUpperCase();
var user = { name: "혜인", age: 29 };
console.log(user);
var nums = [1, 2, 3, 4, 5];
// nums.push("hello");
console.log(nums);
// nums.push(6);
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date));
}
greet("haein", new Date());
