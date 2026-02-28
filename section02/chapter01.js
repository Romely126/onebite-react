// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;    // Big Integer

if(!f1){
    console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례

function printName(person){
    console.log(person.name);
}

let person; // 접근 불가한 경우 undefined로 넘어감
// 회원 정보를 불러오는둥 할 때 정보를 못 불러오는 오류를 잡기 쉬움
// if 조건문을 사용하면 null 값이 나와도 참으로 처리하기에 Falsy를 활용해 모든 상황에 대응
// 값이 들어오면 안되는 경우엔 !person을 기입해 truthy로 처리
printName(person);

