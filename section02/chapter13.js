// 비동기작업을 효율적으로 처리할 수 있도록 도와주는 JS의 내장 객체
// Promise는 비동기 작업을 감싸는 객체
// 작업 실행, 상태관리, 결과저장, 병렬실행, 다시실행 등

// pending : 작업 대기
// fulfilled : 작업 성공
// rejected : 작업 실패


// // then 메서드
// // -> 그 후에 라는 뜻을 가짐
// // 비동기 작업이 성공했을 때에만 호출되는 함수
// promise
//     .then((value)=>{ // promise 작업을 실행, 결과값을 매개변수로 전달까지 진행
//         console.log(value); // then 메서드는 호출 결과로 promise 객체를 반환함 
//     })
//     .catch((error)=>{     // 따라서 catch 메서드를 연결하여 사용이 가능함
//         console.log(error);
//     });   
// // 이런 문법을 promise chaining이라 부른다

function add10(num) {
    const promise = new Promise((resolve, reject) => { // Promise 생성자
    // 비동기 작업은 여기에 작성
    // executor 함수 -> 2개의 매개변수를 가짐
    // resolve는 promise 작업을 성공상태로 바꾸는 함수
    // reject는 promise 작업을 실패상태로 바꾸는 함수

    setTimeout(()=>{
        // const num = 0;

        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject("num이 숫자가 아닙니다.");
        }
    }, 3000);
    });

    return promise;
}

// then 체이닝
add10(0).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});