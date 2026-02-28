// 스코프 (범위, 변수나 함수에 접근하거나 호출할 수 있는 범위를 의미)
// 전역변수, 지역변수 개념

// 전역 스코프 : 블록 외부에 위치
// 지역 스코프 : 블록 내부에 위치


let a = 1; // 전역 스코프

function funcA() {
    let b = 2;  // 지역 스코프
    console.log(a);

    function funcB() {} // 지역 스코프
}

funcA();

if (true) {
    let c = 1;  // 지역 스코프
    function funcB() {} // 전역 스코프
}

console.log(c);


// 함수를 반복문, if문 블럭 안에 선언 시 전역 스코프로 처리
// 단, 함수 내부에 삽입한 경우엔 지역 스코프로 판정됨