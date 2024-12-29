// factory pattern

// 추상 클래스
class Coffee {
  prepare() {
    throw new Error("추상 메서드는 구현해야 한다.");
  }
}

// 구체 클래스
class Americano extends Coffee {
  prepare() {
    return "에스프레소 + 물";
  }
}

class Latte extends Coffee {
  prepare() {
    return "에스프레소 + 우유";
  }
}

class Cappuccino extends Coffee {
  prepare() {
    return "에스프레소 + 우유 + 거품";
  }
}

// 팩토리 클래스
class CoffeeFactory {
  createCoffee(type) {
    switch (type) {
      case "아메리카노":
        return new Americano();
      case "라떼":
        return new Latte();
      case "카푸치노":
        return new Cappuccino();
      default:
        throw new Error("존재하지 않는 커피입니다.");
    }
  }
}

const factory = new CoffeeFactory();

const americano = factory.createCoffee("아메리카노");
const latte = factory.createCoffee("라떼");
const cappuccino = factory.createCoffee("카푸치노");

console.log(americano.prepare());
console.log(latte.prepare());
console.log(cappuccino.prepare());
