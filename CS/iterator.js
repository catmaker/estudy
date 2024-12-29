// 이터레이터 패턴
function* fibonacci() {
  let prev = 0,
    curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
for (let i = 0; i < 5; i++) {
  console.log(fib.next().value); // 1, 1, 2, 3, 5
}
