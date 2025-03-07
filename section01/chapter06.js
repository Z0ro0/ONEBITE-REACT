//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것
let num = 10;
let str = "20";

const result = num + str;
console.log(result); //1020

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 통해 직접 형 변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1); //20

let str2 = "10개";
let strToNum2 = parseInt(str2); //숫자가 앞에 있어야 됨 개10 이런 데이터 존재 시 형 변환 실패로 NaN
console.log(strToNum2); //10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");