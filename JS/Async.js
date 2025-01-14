// 비동기(Asynchronous)
// 코드가 순차적으로 실행되지 않는 것
// 작업이 끝나지 않아도 다음 작업이 실행됨

console.log("1. 비동기 실행 시작");
const asyncTask = () => {
  setTimeout(() => {
    console.log("2. 비동기 작업 완료");
  }, 1000); // 1초 뒤에 실행
};

asyncTask();
console.log("3. 비동기 실행 종료");

// sync vs async
// sync: 요청을 보내고 해당 요청에 대한 응답을 받아야 다음 작업이 실행됨
// async: 요청을 보내고 해당 요청에 대한 응답을 받지 않아도 다음 작업이 실행됨

// alert와 같은 작업은 블로킹 작업이다.
// setTimeout, fetch와 같은 작업은 논블로킹 작업이다.
