### 정의

API는 소프트웨어 간의 통신을 위한 인터페이스이다.
둘 이상의 소프트웨어 간의 통신을 위한 방법이자 사이에 있는 중계자이다.

ex) 카카오톡 채팅 앱과 카카오톡 서버 간의 통신을 위한 인터페이스
A와 B가 있을 때 A와 B 사이에 있는 중계자가 API이다.

무슨 프로토콜로 통신할지?
무슨 메서드로 통신할지?
무슨 데이터 형식으로 받을지? 등등 여러가지가 있다.

### interface란?

interface는 'inter' (사이) + 'face' (표면)의 합성어로, 서로 다른 두 개의 시스템이나 장치 사이에서 정보나 신호를 주고받을 때 접점이 되는 부분을 의미한다.

쉽게 설명하면

- 사용자가 기기를 쉽게 동작시키는데 도움을 주는 시스템
- 서로 다른 두 시스템 간의 약속된 규칙
- 복잡한 내부 동작을 알 필요 없이 외부에서 쉽게 사용할 수 있도록 하는 창구

프론트엔드 관점에서 interface는

1. 사용자 인터페이스(UI): 사용자와 시스템 간의 상호작용을 가능하게 하는 접점
2. API(Application Programming Interface): 프론트엔드와 백엔드 간의 통신을 위한 접점
3. 컴포넌트 간 인터페이스: 리액트/뷰 등에서 컴포넌트 간의 데이터 전달을 위한 규약

### 장점

- API 제공자는 드러내고 싶은 부분만 드러내면 된다.
- 공개하기 싫은 부분은 숨길 수 있다.
- 프론트엔드는 백엔드의 구현 방법을 몰라도 인터페이스만 알면 사용할 수 있다. (어떻게 만들어졌는지는 몰라도 사용할 수 있다.)
- 백엔드는 구현 방법을 바꿔도 괜찮다.
- DB를 업데이트 하더라도 프론트엔드는 수정할 필요가 없다. (DB 튜닝 등)
- 제공자는 데이터를 한 곳에 모아둘 수 있다. (클릭 API를 만들어서 집계가 필요한 데이터를 모아둘 수 있다.)

### private vs public

- private: 내부적으로 사용하는 API
- public: 외부에 공개하는 API

#### private

- 내부적으로 사용된다.
- 주로 해시 함수, 암호화 알고리즘 등이 있다.
- 외부에 공개하지 않는다.

#### public

- 외부에 공개된다.
- 주로 외부에 서비스를 제공하는 경우에 사용된다.
- 하루 요청수 제한이나 계정 제한 등이 있다.
