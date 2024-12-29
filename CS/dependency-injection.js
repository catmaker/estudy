// 의존성 주입(Dependency Injection)
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getUser(id, name) {
    return this.userRepository.getUser(id, name);
  }
}

class DatabaseUserRepository {
  getUser(id, name) {
    return { id, name };
  }
}

const userService = new UserService(new DatabaseUserRepository());

console.log(userService.getUser(1, "신지수"));
console.log(userService.getUser(2, "김철수"));
