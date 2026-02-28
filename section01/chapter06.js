// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;   // 문자열 간 덧셈이 진행, 묵시적 형 변환 발생
console.log(result);

// 2. 명시적 형 변환
// 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시함
// 내장함수는 기본 제공되는 함수들을 의미
let str1 = "10";
let strToNum1 = Number(str1);   // str1을 숫자형으로 명시적 형 변환
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);   // 문자열, 문자가 섞인 값은 변환이 되지 않음
console.log(strToNum2); // NaN, 연산 실패

let strToNum2_ = parseInt(str2);    // 문자열이 섞인 경우, 숫자가 앞에 나온 경우에 기능을 한다 보면 됨
console.log(strToNum2_);


// 숫자 -> 문자열 형 변환
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다")