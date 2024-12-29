// strategy pattern

// 전략 인터페이스
class PaymentStrategy {
  pay(amount) {
    throw new Error("추상 메서드는 구현해야 한다.");
  }
}

// 구체 전략들
class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    return `신용카드로 ${amount}원 결제`;
  }
}

class KakaoPayPayment extends PaymentStrategy {
  pay(amount) {
    return `카카오페이는 할인 1000원을 적용하여 ${amount - 1000}원 결제`;
  }
}

class TossPayment extends PaymentStrategy {
  pay(amount) {
    return `토스로 ${amount}원 결제`;
  }
}

// 컨텍스트 (실제 전략을 사용하는 클래스)
class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount) {
    return this.paymentStrategy.pay(amount);
  }
}

// 사용 예시
const cart = new ShoppingCart(new CreditCardPayment());
console.log(cart.checkout(10000));

cart.setPaymentStrategy(new KakaoPayPayment()); // 전략 교체
console.log(cart.checkout(10000));
