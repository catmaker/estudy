// 블로킹(Blocking)
// 블로킹은 한 작업이 완료될 때까지 다음 작업을 실행하지 않는 것
// 예를 들어, 버튼을 눌렀을 때 팝업이 뜨는 것은 블로킹 작업이다.
// 팝업이 뜨지 않으면 다음 작업을 실행할 수 없기 때문이다.

// 블로킹 예시
const fs = require("fs");
const path = require("path");
console.log("1. 파일 읽기 시작");
const syncData = fs.readFileSync(
  path.join(__dirname, "test", "Blocking.txt"),
  "utf-8"
);
console.log("2. 파일 읽기 결과", syncData);
console.log("3. 파일 읽기 종료");
