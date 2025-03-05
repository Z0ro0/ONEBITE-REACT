//1. 콜백함수
function main(value) {
    value();
}

function sub() { //sub는 콜백함수이다.
    console.log("sub");
}

main(sub);