// 원시타입과 객체타입
// 구분짓는 이유는 값이 저장되거나 복사되는 과정이 다르기 때문이다
// 원시 타입 (Number, String, Boolean, Null, Undefined)은 값 자체로써 변수에 저장되고 복사됨
// 객체 타입 (Object, Array, Function...)은 참조값(주소)을 통해 변수에 저장되고 복사됨
// -> 객체 타입은 완전 복사, 새로 메모리 할당되는 불변값인 원시 타입과 다르게 참조값으로 접근한 원본 데이터를 수정함(가변값)

// 객체 타입 주의사항
// 1. 의도치 않게 값이 수정될 수 있다
let o1 = { name: "장희원" };
// let o2 = o1;     // 얕은 복사
// o2.name = "홍길동"; // 원 참조값 수정
let o2 = {...o1};     // 새 객체를 생성하고 프로퍼티를 복사함 (깊은 복사)
o2.name = "홍길동"

// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
let ob1 = {name: "장희원"};
let ob2 = ob1;
let ob3 = {...ob1}  // spread 연산자로 새 객체에 프로퍼티 값을 복사

// 얕은 비교
console.log(ob1 === ob2);   // True
console.log(ob1 === ob3);   // False, 객체 간 비교는 참조값을 기준으로 판단하기 때문
// 이런 경우에 프로퍼티 값을 기준으로 비교하려면 JSON.stringify() 같은 내장함수를 활용해 
// 문자열로 변환한 후 비교해주어야 한다
console.log(
    JSON.stringify(ob1) === JSON.stringify(ob3) // True
);  // 깊은 비교
