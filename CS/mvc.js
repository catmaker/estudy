// model view controller

class UserModel {
  constructor() {
    this.users = []; // 데이터 저장
  }

  getUsers() {
    // 데이터 조회
    return this.users;
  }

  addUser(user) {
    // 데이터 추가
    this.users.push(user);
  }
}

class UserView {
  render(users) {
    // 데이터 출력
    console.log(users);
  }
}

class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // 데이터 출력
    this.view.render(this.model.getUsers());
  }

  addUser(user) {
    // 데이터 추가
    this.model.addUser(user);
    // 데이터 출력
    this.view.render(this.model.getUsers());
  }
}

const model = new UserModel();
const view = new UserView();
const controller = new UserController(model, view);

controller.init();
controller.addUser({ id: 1, name: "지수" });
