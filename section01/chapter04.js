// 1. 변수
let age = 27;   // 변수를 선언하고 초기화한다
console.log(age);

age = 30;
console.log(age);

// 변수는 계속해서 값을 변경할 수 있으며
// 같은 이름을 가지는 변수를 두 개 이상 선언하는것은 불가능하다


// 2. 상수
const birth = "1997.01.07"; // 초기화 이후엔 값을 변경할 수 없다
birth = "124" // 오류 발생

// 변경하지 말아야 하는 고정된 값들을 저장하는 데 사용한다


// 3. 변수 명명 규칙, Naming Rule
// 3-1. $, _를 제외한 기호는 사용할 수 없다
let $_sign;

// 3-2. 숫자로 시작할 수 없다.
let time01;
let _2name; // 이렇게는 사용이 가능함

// 3-3. 예약어를 사용할 수 없다.
// let let;



// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;

// 의미있는 단어로 변수명을 지정해야 함