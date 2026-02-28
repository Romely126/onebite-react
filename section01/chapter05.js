// 원시 타입 Number String Boolean Null Undefined
// 객체 타입 Object -> Array, Function, RegexExp

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 모듈러 함수
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity; // 무한대
let mInf = -Infinity; // !무한대

let nan = NaN;  // Not A Number

console.log(1 * "hello");


// 2. String Type
let myName = "장희원";   // 무조건 쌍따옴표나 작은 따옴표로 감싸야 할당값으로 인식하고 안하면 변수로 인식함
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);

// 백틱
// 변수를 문자열에 동적으로 할당할 수 있음
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`   
console.log(introduceText);

// 템플릿 리터럴 문법


// 3. Boolean Type
let isSwitchOn = true;  // 0, 1의 개념, 상태를 의미하는데 사용됨
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
// 변수를 선언하고 어떠한 값도 할당하지 않으면 할당되는 형
let none;
console.log(none);

// Undefined vs Null
// Undefined는 선언 시 값을 안넣으면 할당됨
// Null은 값을 프로그래머가 아무것도 없다는 걸 표기하기 위해 사용됨

