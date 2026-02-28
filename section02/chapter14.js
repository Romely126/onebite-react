// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "장희원",
                id: "romely",
            });
        }, 1500);
    });
}

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {    // 비동기 함수임을 명시하는 역할도 암묵적으로 수행됨
    const data = await getData();   // getData의 결과값인 Promise 값을 작업이 끝날때까지 기다리다 담음
    console.log(data);              // 이 방법을 통해 비동기 작업을 동기 작업처럼 사용할 수 있도록 함
}

printData();