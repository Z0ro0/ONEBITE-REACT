//1. number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 % num2); //나머지 연산은 모듈러 연산이라고 부름

let inf = Infinity; //양의 무한대
let mInf = -Infinity; //음의 무한대

let nan = NaN; //not a number -> 연산 실패 시

console.log(num1 * "hello"); //Nan 출력


//2. String type
let myName = "이정환";
let myLocation = '묵동';
let introduce = myName + myLocation;
console.log(`이름은 ${myName}이고 ${myLocation}에서 살아요`); //템플릿 리터럴 문법

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type: 개발자가 할당해야 됨됨
let empty = null;

//5. undefined Type
let none;
console.log(none);