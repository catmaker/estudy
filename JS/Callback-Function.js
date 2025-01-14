// 콜백 함수(Callback Function)
// 콜백 함수는 함수의 인자로 전달되는 함수

// 콜백 함수 예시
const orderPizza = (callback) => {
  console.log("1. 피자 주문이 접수되었습니다."); // 2
  console.log("2. 피자 조리가 시작되었습니다."); // 3

  setTimeout(() => {
    console.log("3. 피자 조리가 완료되었습니다."); // 5
    callback();
  }, 3000);
};

console.log("=== 피자 주문 시작 ==="); // 1
orderPizza(() => {
  console.log("4. 피자를 받았습니다."); // 6
});
console.log("5. 피자를 기다리는 중..."); // 4
