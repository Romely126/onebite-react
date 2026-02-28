// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 반환하는 메서드
let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "장희원", hobby: "사진"},
    {name: "니콘단", hobby: "테니스"},
];

const tennisPeople = arr.filter((item) =>{
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
