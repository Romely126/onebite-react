// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 프로퍼티 조작은 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color;    // 삭제

// animal = 123;   // 아예 새로운 값을 넣는것은 안됨

console.log(animal);

// 상수 객체더라도 프로퍼티의 추가, 수정, 삭제는 가능하다
// 요점은 상수의 핵심 구조만 변경되지 않으면 된다

// 2. 메서드
// 값이 함수인 프로퍼티
const person = {
    name: "장희원",
    // 메서드 선언
    sayHi() {   // 단축된 함수형 모두가 올 수 있음
    console.log("안녕!");
    }
};

person.sayHi();
person["sayHi"]();

// 객체의 동작을 선언하기 위해 매서드로 선언됨