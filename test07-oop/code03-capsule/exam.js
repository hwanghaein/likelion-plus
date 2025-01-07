// 자바스크립트의 캡슐화 도구
// 1. function
// 2. class

// 1. 함수의 특징 :=====
// 다음 두 가지 함수는 용도가 같은 함수일까요? 다른 함수일까요?
/*
function Exam() {}
function sayHello() {}
답은 : 노 다르다..
*/
// 2. 함수의 호출 방식
// 함수는 용도에 따라서 두가지 방식으로 사용된다. 
// 용도 1 : 생성자 -> new 를 통해서 실행하며 new를 통해서 생성된 객체를 초기화하는 역할을 한다.
// 용도 2 : 일반함수
// let exam = new Exam(); // 객체의 초기화를 담당하는 함수 => constructor
// Exam();

// 3. 인스턴스 생성하고 인스턴스를 통해 메소드 호출하기
// let exam = new Exam(1, 1, 1);
// 인스턴스를 이용해서 실행되는 메소드 : 인스턴스 메소드
// console.log(exam.total());

// 4. 함수 생성자를 이용한 캡슐화의 문제점
// 문제점 확인하기 : 객체를 100개 만든다고 가정하자. 그러면 어떤 문제가 생길까?
/*
function Exam(kor, eng, math) {
    this.kor = kor || 0;
    this.eng = eng || 0;
    // this.math = 0;
    this["math"] = math || 0;

    this.total = function () {
        return this.kor + this.eng + this.math;
    }
    this.avg = function () {
        return this.total() / 3;
    }
}
let exam1 = new Exam(10, 20, 30);
let exam2 = new Exam(10, 20, 30);

console.log(exam1.total());
console.log(exam2.total());
console.log(exam1.total === exam2.total);
*/
// 5. 함수 생성자를 이용한 캡슐화의 해결책, prototype
function Exam(kor, eng, math) {
    this.kor = kor || 0;
    this.eng = eng || 0;
    // this.math = 0;
    this["math"] = math || 0;
}
Exam.prototype.total = function () {
    return this.kor + this.eng + this.math;
}
Exam.prototype.avg = function () {
    return this.total() / 3;
}

let exam1 = new Exam(10, 20, 30);
let exam2 = new Exam(10, 20, 30);

console.log(exam1.total());
console.log(exam2.total());
console.log(exam1.total === exam2.total);

// new Array();
Array.prototype.eng = 30;
let ar1 = [];
ar1.kor = 30;
let ar2 = [];

console.log(ar1.kor, ar2.kor);
console.log(ar1.eng, ar2.eng);











const total = () => {
    return kor + eng + math;
}

const avg = () => {
    return total() / 3;
}