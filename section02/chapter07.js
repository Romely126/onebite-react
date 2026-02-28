// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);    // push 메서드는 push 후 배열의 길이를 반환

// 2. pop
// 맨 뒤에있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop() // 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // unshift 메서드는 unshift 후 배열의 길이를 반환

// shift, unshift는 push, pop 보다 느림
// -> 맨 뒤의 인덱스를 조작하는건 쉽지만 
// 맨 앞의 인덱스를 조작하면 삭제/추가 후 나머지 인덱스도 변경이 필요하기 때문

// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5)    // 2번 인덱스부터 5번 앞 인덱스까지를 잘라냄
console.log(arr5);  // 1, 2, 3, 4, 5. 잘라내도 원 배열에는 차이 x
let sliced2 = arr5.slice(2);    // 2번 인덱스부터 마지막 인덱스까지
let slice3 = arr5.slice(-1);    // 뒤에서부터 하나의 인덱스를 잘라냄

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arrr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);