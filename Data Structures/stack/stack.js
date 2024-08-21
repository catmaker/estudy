console.log("Start");

// 비동기 작업: `setTimeout`
setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

// 무한 루프를 통해 콜 스택을 채우기
while (true) {
  // 아무 작업도 하지 않음
}

console.log("End");
