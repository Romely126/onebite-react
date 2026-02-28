// function add(a, b, callback) {  // callback 함수 인자로 추가
//     setTimeout(() => {
//         const sum = a + b;  // 3
//         callback(sum);  // 콜백 함수로 sum 값을 전달
//     }, 3000);
// }

// add(1, 2, (value)=>{    // add  함수 호출, 비동기 작업 시작
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "치킨";
        callback(food)
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {    // 콜백함수 결과값을 다시 전달
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);   // 비동기 작업 결과를 콜백 함수로 표현
        });
    });
});
// 하지만 이러면 코드 깊이가 너무 깊어짐
// 다음 차시에서 Promise로 해결