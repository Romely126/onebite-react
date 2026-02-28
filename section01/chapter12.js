// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

let varA = funcA();
console.log(varA);

let varB = function funcB() {   // 함수 표현식, 값으로서 취급, 호이스팅의 대상이 되지 않음
    console.log("funcB");
};

varB();
// funcB(); 이런 식으로 호출은 불가능하다.

// 2. 화살표 함수

let varC = () => 1; // 매개변수 없이 단순 리턴이면 되는 경우
let varC_ = (value) => value + 1;   // 매개변수 값이 있는 경우
let varC__ = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC());

