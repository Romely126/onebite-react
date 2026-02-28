// 함수 선언

function greeting () {
    console.log("안녕하세요"); 
}


console.log("호출 전");
greeting(); // 함수 실행
console.log("호출 후");

function getArea () {
    let width  = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}
getArea();

function _getArea (width, height) {
                    // 매개 변수
    let area = width * height;
    function another() {    // 중첩 함수 생성 가능
        console.log("another");
    }

    another();

    return area;
}
let size = _getArea(10, 20);
                    // 인수
console.log(size);


// 호이스팅 (끌어 올리다)
// -> 밑바닥에 생성한 함수들을 실행 전에 최상단으로 끌어와 실행하는 것
// -> 함수 위치가 꼬여도 함수들이 정상 작동함, 어디에 선언해도 상관 없다는 뜻