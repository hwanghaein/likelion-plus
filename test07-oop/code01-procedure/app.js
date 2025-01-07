// 외부라이브러리 : npm install readline-sync
// 절차적인 프로그래밍
/*
1. 고급언어를 이용한 절차작성
2. 제어구조를 이용한 흐름제어
*/

/*
점수를 배열에 과목별로 나누어 저장하는 것이 문제!!! : 6조 땡큐~
입력에 대한 에러처리가 부족하다. : 5조 땡큐~
콘솔로그가 너무 많다. : 3조 땡큐~
콘솔로그가 너무 많아서 가독성이 떨어진다. : 4조 땡큐~
콘솔기반 출력에 한정되어 있고, 변수 스코프가 너무 넓다. : 1조 땡큐~
코드 리팩토링과 확장성이 쫌 떨어진다? : 2조 땡큐~

1. 코드가 커지는 문제 : 함수로 분리
2. 변수의 스코프가 너무 넓은 문제 : 지역화
3  데이터의 구조화 : 데이터를 표현하지 않고 있다. : 구조화된 데이터 형식식
// 이름, 나이, 주소, 연락처
학생,개인정보,사람,회원,개인정보,사용자,인적사항
4. 집중화
*/

const readlineSync = require("readline-sync");
let kors = [];
let engs = [];
let maths = [];

let isRun = true;

// 헤더출력
console.log(
    `====================================
           성적관리 프로그램         
====================================`
);

while (isRun) {
    // 메뉴입력
    console.clear();
    console.log("------------------------------------");
    console.log("                메뉴선택             ");
    console.log("------------------------------------");

    console.log("1. 성적입력");
    console.log("2. 성적출력");
    console.log("3. 종료");
    console.log(">");
    let menu = readlineSync.question("");
    menu = parseInt(menu);

    switch (menu) {
        case 1: // 성적입력
            console.clear();
            console.log("------------------------------------");
            console.log("                성적입력             ");
            console.log("------------------------------------");

            let kor = readlineSync.question("kor: ");
            kor = parseInt(kor);
            let eng = readlineSync.question("eng: ");
            eng = parseInt(eng);
            let math = readlineSync.question("math: ");
            math = parseInt(math);

            kors.push(kor);
            engs.push(eng);
            maths.push(math);
            break;
        case 2: // 성적출력
            console.clear();

            console.log("------------------------------------");
            console.log("                성적출력             ");
            console.log("------------------------------------");
            console.log(`총인원: ${kors.length}명`);
            console.log("");

            // 평균을 기준으로 역순정렬
            // ??

            for (let i = 0; i < kors.length; i++) {
                let kor = kors[i];
                let eng = engs[i];
                let math = maths[i];

                // 총점 계산
                let total = kor + eng + math;
                // 평균 계산
                let avg = total / 3;

                console.log(`num: ${i + 1}`);
                console.log(`kor: ${kor}`);
                console.log(`eng: ${eng}`);
                console.log(`math: ${math}`);
                console.log(`total: ${total}`);
                console.log(`avg: ${avg}`);
                console.log("--------------------------");
            }

            console.log("계속하려면 엔터키를 누르세요.");
            readlineSync.question("");

            break;
        case 3: // 프로그램 종료
            isRun = false;
            break;
    }
}

// 푸터 출력
console.log("====================================");
console.log("Bye~~~");
