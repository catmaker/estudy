// proxy pattern

const api = {
  getUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  },
};

// 캐시 저장소
const cache = new Map();

const apiWithCache = new Proxy(api, {
  // 프록시 객체의 메서드를 가로채는 함수
  get: function (target, property) {
    const originalMethod = target[property];

    return async function (...args) {
      const cacheKey = `${property}-${JSON.stringify(args)}`;

      if (cache.has(cacheKey)) {
        console.log("캐시에서 데이터 반환");
        return cache.get(cacheKey);
      }
      console.log("API 호출");
      const result = await originalMethod.apply(this, args);

      cache.set(cacheKey, result);
      console.log("캐시에 데이터 저장");
      return result;
    };
  },
});

async function main() {
  await apiWithCache.getUsers(1);
  await apiWithCache.getUsers(1);
}

main();
