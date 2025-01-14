// 동기(Synchronous)
// 코드가 순차적으로 실행되는 것
// 작업이 끝나야 다음 작업이 실행됨

console.log("1. 동기 실행 시작");
const syncTask = () => {
  for (let i = 0; i < 1000000000; i++) {
    // 시간이 걸리는 작업
  }
  return "동기 작업 완료";
};

const result = syncTask();
console.log("2. 동기 실행 종료", result);
console.log("3. 동기 실행 종료");
