// 객체 
// 현실세계에 존재하는 어느 객체의 설명을 표현하기 용이 (이름, 나이, 소속 등)


// 1. 객체 생성
let obj1 = new Object() // 객체 생성자 (내부 함수 사용)
let obj2 = {} // 객체 리터럴 (간결, 선호)

// 2. 객체 프로퍼티 (객체 속성)
// key : value 구조
let person = {
    name : "장희원",    // value에는 무엇이든 올 수 있다
    age : 25,   // key에는 숫자, 문자열을 사용할 수 있다
    hobby : "photography",
    job : "non-hired",
}

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

// 괄호 표기법을 이용할 경우 "" 쌍따옴표로 묶어 문자열로 넘겨야 함
let age = person["age"];       // 안그러면 함수로 인식하기 때문임
console.log(age);

let property = "hobby"; // 변수에 key 값을 담아
let hobby = person[property];   // 동적으로 value를 불러올 수 있다
console.log(hobby);

// 동적으로 key 값을 할당해야 하는 경우 괄호 표기법
// 정적으로 key 값을 할당하는 경우 점 표기법을 활용

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "non-hired";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "student";
person["favoriteFood"] = "돈가스";

console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name 프로퍼티가 person 객체 내부에 있는지를 T/F로 응답
console.log(result1);
let result2 = "cat" in person;
console.log(result2);