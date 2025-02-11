// 캡슐이 아닌 캡슐
// 캡슐의 조건
/*
이 코드는 캡슐화 아닌 캡슐화를 한 코드이다.
캡슐화란?
- 객체의 속성과 행위를 하나로 묶고, 
  실제 구현 내용 일부를 외부에 감추어 은닉한다.

1. 마지막 하나만 더 추가해보자.
현재 이 코드는 exam 데이터들을 관리하는 서비스를 제공하는데,
하지만 exam이 제공하는 서비스는 아직 분리하지 않은 상태이므려
exam 데이터를 직접 다루는 코드를 추가해보기로 하자.
exam.js 파일을 추가하자.

2. exam.js 가 하는 역할을 exam 단위 데이터가 제공하는 서비스를 구현

  */

// let exams = []; // 성적데이터

// export const add = (exam) => {
//     exams.push(exam);
// }

// export const getList = (page = 1, size = 3) => {
//     let exams1 = exams
//         .sort((a, b) => b.kor - a.kor)
//         .slice(0, 3);

//     return exams1;
// }

// export const size = () => exams.length;
// 위의 코드를 이용해서ExamService 캡슐을 작성해주세요
// ExamService의 서비스 함수는 add, getList, size, get(index) 4개입니다.
// 내부적으로 사용하는 속성은 Exam 객체를 담을 수 있는 배열입니다. 
// 배열명은 exams로 하겠습니다.

export default class ExamService {
  #exams = [];
  constructor() {
    // this.exams = []; // Exam 객체배열
  }
  add(exam) {
    this.#exams.push(exam);
  }
  getList(page = 1, size = 3) {
    let exams = this.#exams
      .sort((a, b) => b.total() - a.total())
      .slice(0, 3);

    return exams;
  }
  size() {
    return this.#exams.length;
  }
  get(index) {
    return this.#exams[index];
  }
}
