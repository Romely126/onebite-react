// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 반환하는 메서드
let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "장희원", hobby: "사진"},
    {name: "니콘단", hobby: "테니스"},
];

const tennisPeople = arr1.filter((item) =>{
    if(item.hobby === "테니스") return true;
});
// 카테고리, 분류 필터에 많이 사용

// 2. map
// 배열의 모든 요소를 순회하며 각각 콜백 함수를 실행하고 
// 그 결과값들을 모아 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;    // 이처럼 반환값을 줄 수 도 있음, 원본 배열의 값에 *2한 새 배열 생성
});


let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는것
let arr3 = ["b", "a", "c"];
arr3.sort();    // 10, 3, 5와 같이 문자열이 아닌 경우 정상 작동하지 않음
// console.log(arr3);

// 숫자의 오름차순 정렬
// 내림차순은 return값을 대치
let arr3_ = [10, 3, 5];
arr3_.sort((a, b) => {
    if(a > b){
        // b가 a의 앞으로 오도록 배치
        return 1;
    }else if(a < b){
        // a가 b 앞에 오도록 배치
        return -1;
    }else{
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "romely"];
const joined = arr6.join(" ");  // 구분자를 매개변수로 받아서 공백을 넣거나 dash를 추가할 수 있음

console.log(joined);