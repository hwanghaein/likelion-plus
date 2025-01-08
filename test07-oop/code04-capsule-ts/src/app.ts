let user : {name: string, age: number}
user = { name: "혜인", age: 29 };
console.log(user);


let nums: number[] = [1, 2, 3, 4, 5];
// nums.push("hello");
console.log(nums);
// nums.push(6);


function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}`);
}

greet("haein", new Date())