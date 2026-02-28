// math 모듈

// ESM 방식 (ES Module System), function 앞에 export를 붙임
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// CJS (common JS module system)
// module.exports = {
//     add: add,
//     sub: sub,   
// };

// math 모듈을 대표하는 단 하나의 함수
export default function multiply(a, b) {
    return a * b;
}