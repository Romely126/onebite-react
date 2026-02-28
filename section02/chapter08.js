// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3]
arr1.forEach( function (item, idx, arr) {   // 콜백함수 사용
    // console.log(idx, item*2);
});
// 0, 2
// 1, 4
// 2, 6

let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item * 2);
});
// console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);   // True
let isIncludes = arr2.includes(10); // False

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);    // 1, 만약 중복값이 있다면 맨 처음 탐색된 맨 앞 위치를 출력
let indexs = arr3.indexOf(5);   // -1 출력, 값 존재 x

let objectArr = [
    {name: "이정환"},
    {name: "장희원"},
]
// 얕은 비교
console.log(objectArr.indexOf({ name: "장희원"}));  // -1, 찾지 못함, 객체는 프로퍼티로 비교하지 않기 때문

// 깊은 비교, findIndex 사용
console.log(
    arr4.findIndex(
        (item) => item.name === "이정환"    // 0, 찾을 수 있음
    )
);

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환
// 깊은 비교, 특정 프로퍼티를 조건으로 찾을 수 있어서 객체 타입에 용이
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    if (item === 2) return true;    // 배열 요소들 중 item값이 2인 인덱스 리턴
});

const findedIndex2 = arr4.findIndex((item) => {
    if (item % 2 !== 0) return true;    // 0 반환, 1이 가장 먼저 콜백함수를 충족
});
// 위 식은 아래처럼 표현도 가능
const findedIndex3 = arr4.findIndex((item) => item % 2 !== 0);
// 만족하는 인덱스가 없으면 -1 반환


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    { name: "이정환"},
    { name: "장희원"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"    // "name: 이정환" 반환
)