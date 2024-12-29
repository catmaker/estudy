// observer pattern

// 주체
class Subject {
  constructor() {
    // 옵저버 리스트
    this.observers = [];
  }

  // 옵저버 추가
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 옵저버 제거
  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  // 옵저버들에게 알림
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// 옵저버
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subject) {
    console.log(`${this.name}이 주체가 변경되었습니다.`);
  }
}

// 사용 예시
const subject = new Subject();
const observer1 = new Observer("observer1");
const observer2 = new Observer("observer2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify();
