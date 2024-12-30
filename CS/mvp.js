// model view presenter

// Model: 데이터 관리
// View: 화면 표시
// Presenter: 모델과 뷰 사이의 중개자

// 장점: 모델과 뷰가 느슨하게 결합되어 있어 유지보수가 쉽다.
// 단점: 코드가 복잡해질 수 있다.

// Model
class UserModel {
  constructor() {
    this.name = "";
    this.email = "";
  }

  setUserDate(name, email) {
    this.name = name;
    this.email = email;
  }
}

// View (인터페이스)
class UserView {
  displayUser(name, email) {
    console.log(`이름: ${name}, 이메일: ${email}`);
  }

  // View는 Presenter에만 의존하므로 모델과 직접적으로 의존하지 않는다.
  setPresenter(presenter) {
    this.presenter = presenter;
  }

  onUpdateButtonClick() {
    this.presenter.updateUser("New Name", "new@example.com");
  }
}

// Presenter
class UserPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setPresenter(this);
  }

  updateUser(name, email) {
    this.model.setUserDate(name, email);
    this.view.displayUser(name, email);
  }
}

// 사용 예시
const model = new UserModel();
const view = new UserView();
const presenter = new UserPresenter(model, view);

model.setUserDate("New Name3", "new@example.com3");
view.displayUser(model.name, model.email);
