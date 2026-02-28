// 단락 평가
// 논리연산자에서 특정 값을 굳이 모두 접근시키지 않아도 연산이 끝나는 경우

function returnFalse() {
    return false;
}

function returnTrue() {
    return true;
}

console.log(returnFalse() && returnTrue()); 


// 논리연산식에서 첫번째 피연산자 값만으로도 판별이 가능하면 뒤 피연산자엔 접근하지 않는 방식

console.log(returnTrue() && returnFalse());     // 이 경우 둘 다 호출됨

console.log(returnTrue() || returnFalse());     // 이 경우 returnTrue()만 호출됨

// truthy, falsy에도 해당됨
function returnFalse() {
    return undefined;
}

function returnTrue() {
    return 10;
}

console.log(returnTrue() || returnFalse()); // truthy로 단락 평가

console.log(returnFalse() && returnTrue()); // false로 단락 평가


// -> 그래서 언제 쓸수있을까?
function printName(person) {
    const name = person && person.name; // 값이 있으면 이름을 전달하고 없으면 undefined가 전달됨
    console.log(name || "person의 값이 없음");  // 입력되는 값이 truthy하면 name 값을 출력, 아니라면 없음 문구 출력
}

printName();
printName({ name: "장희원" });