for ( let idx=0; idx <= 10; idx++) {  // 초기값(카운터 함수); 조건식; 증감식
    console.log("반복!");

    if (idx % 2 === 0) {    // 멈추지 않고 진행, 필터링
        continue;
    }

    if (idx >= 5) { // 조건식을 건드릴 수 없는 경우 이런식으로 탈출이 가능
        break;
    }
}