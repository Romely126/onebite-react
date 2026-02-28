// // 모듈 불러오기, CJS방식
// // const { add, sub } = require("./math"); // 객체의 구조분해할당
// import mul, { add, sub } from "./math.js";   // ESM 방식
// // import mul from "./math.js";    // default로 export된 함수는 이름 변경이 가능
// // 위처럼 합칠 수 도 있지만 {} 밖에 와야 함

// // 모듈 내 함수 사용
// console.log(add(1, 2));
// console.log(sub(15, 5));
// console.log(mul(2, 4));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);