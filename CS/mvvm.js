// Model-View-ViewModel (MVVM)

// Model: 데이터 관리
// View: 화면 표시
// ViewModel: 모델과 뷰 사이의 중개자

// 장점: 모델과 뷰가 느슨하게 결합되어 있어 유지보수가 쉽다.
// 단점: 코드가 복잡해질 수 있다.

// Model
class UserModel {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// ViewModel
class UserViewModel {
  constructor() {
    this.model = new UserModel("", "");
    this.createView();
    this.setupBindings();
  }
  // View 동적 생성
  createView() {
    // 컨테이너 생성
    this.container = document.createElement("div");
    document.body.appendChild(this.container);

    // 입력 필드 생성
    this.nameInput = document.createElement("input");
    this.nameInput.placeholder = "이름";
    this.container.appendChild(this.nameInput);

    this.emailInput = document.createElement("input");
    this.emailInput.placeholder = "이메일";
    this.container.appendChild(this.emailInput);

    // 저장 버튼 생성
    this.saveButton = document.createElement("button");
    this.saveButton.textContent = "저장";
    this.container.appendChild(this.saveButton);

    // 메시지 박스 생성
    this.messageBox = document.createElement("div");
    this.container.appendChild(this.messageBox);
  }
  // 데이터 바인딩 설정
  setupBindings() {
    // 입력 이벤트
    this.nameInput.addEventListener("input", (e) => {
      this.model.name = e.target.value;
      this.validate();
    });

    this.emailInput.addEventListener("input", (e) => {
      this.model.email = e.target.value;
      this.validate();
    });

    // 저장 버튼 이벤트
    this.saveButton.addEventListener("click", () => {
      this.saveUser();
    });
  }

  // 유효성 검사
  validate() {
    const isValid =
      this.model.name.length > 0 && this.model.email.includes("@");
    this.saveButton.disabled = !isValid;
    return isValid;
  }

  // 사용자 저장
  saveUser() {
    this.messageBox.textContent = "사용자가 저장되었습니다.";
  }
}

// 실행
document.addEventListener("DOMContentLoaded", () => {
  const userVM = new UserViewModel();
});
