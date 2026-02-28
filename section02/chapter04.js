// 1. Spread 연산자
// -> spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 흩뿌려줌

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// arr2 사이에 arr1값들을 하나씩 넣으려는데 기존엔 arr1[1] 이런식으로 명시적으로 값을 추가함
// 이러면 값이 바뀌고 길이가 바뀌면 위험

let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

//객체에도 사용 가능
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1); // 3개의 매개변수로 받게 됨

// 2. Rest 매개변수
// rest: 나머지, 나머지 매개변수
function funcB(one, two, ...rest) {    // 매개변수를 정의하는 () 소괄호 내에 쓰였기에 spread가 아닌 rest
    console.log(one);   // 첫번째 값이 담김
    console.log(rest);  // rest 매개변수 안에 전달된 인수들이 배열로 담김
    // 단 rest 매개변수 뒤에는 매개변수가 올 수 없음 (맨 뒤까지의 나머지 값이 들어가기 때문.)
}

funcB(...arr1)

// 꼭 ...rest여야되는건 아니고 ...뒤에 REST매개변수 변수명을 넣어주면 됨 ...rArr등등