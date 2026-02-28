// 연산자 2
// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;   // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;    // 둘 중 undefined가 아닌 var2의 값이 저장됨
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;    // 둘 다 null, undefined가 아니라면 둘 중 앞에 오는 값이 할당됨

let userName = "장희원"
let userNickName = "romely"

// 회원 관리 기능에서 실명, 닉네임을 출력할 때 실명이 없는 경우 닉네임을 출력하거나 
// 둘 중 존재하는 값을 출력하는 등 활용
let displayName = userName ?? userNickName; 
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof(var7);
console.log(t1);

// 3. 삼항 연산자
// -> 항을 세 개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수라면 "짝", 홀수라면 "홀"을 할당
let res = var8 % 2 === 0? "짝수" : "홀수";
         // 조건식      참일 경우 반환   거짓일 경우 반환
console.log(res);