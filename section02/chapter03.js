// 1. 배열의 구조 분해 할당
let arr = [ 1, 2, 3 ];

let [one, two, three, four = 4] = arr;  // 오류가 발생하진 않되, four에는 undefined 저장
// 값을 할당할수있음
console.log(one, two, three);

// 2. 객체의 구조 분해 할당
let person = {
    name: "장희원",
    age: 25,
    hobby: "사진",
    extra: "hi",
};

let {name, age, hobby} = person;    // 객체는 {} 사용
console.log(name, age, hobby);

let {
    names,
    age : myAge,    // 이런식으로 변수명 변경 가능 
    hobbys} = person;
console.log(names, myAge, hobbys);

// 함수에 여러 인수를 전달 할 때 유용함

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {   // 2) 객체 내 프로퍼티를 분해 할당
    console.log(name, age, hobby, extra)    // 3) 접근 가능
}

func(person);   // 1) 객체를 매개변수로 전달

// ! 중괄호로 구조분해 할당을 명시해야 하고
// ! 객체를 매개변수로 넘겨야 함, 기타 값 넣으면 당연히 안됨