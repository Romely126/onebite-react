// 연산자, Operator
// 1. 대입 연산자
let var1 = 1;
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// 위의 우선순위로 산술연산이 진행됨

let num6 = 1 + 2 * 10;
console.log(num6);
let num6_ = (1 + 2) * 10;
console.log(num6_);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; //  num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);
// 모든 산술 연산자가 올 수 있음

// 4. 증감 연산자
let num8 = 10;
num8++; // 변수 뒤에 ++를 붙이면 이 라인이 끝나고 다음 줄부터 적용됨
console.log(num8);
console.log(++num8);    // 변수 앞에 ++를 붙이면 그 줄에서 바로 적용됨


console.log(--num8);    // 전위 연산
console.log(num8--);    // 후위 연산

// 5. 논리 연산자
let or = true || false; // 두 개의 값중 하나만 true인 경우 true 반환

let and = true && false;    // 두 개의 값이 모두 true이어야 true 반환

let not = !true;    // 값을 반전하여 반환함


// 6. 비교 연산자
let comp1 = 1 === 2;    // 동등 연산, 자료형 단위까지 비교 (권장됨)
let comp2 = 1 !== 2;    // 비동등 연산

let comp3 = 2 > 1;  // 대소 연산
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
