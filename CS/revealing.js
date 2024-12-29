// revealing module pattern

const MyModule = (function () {
  // private
  const privateVariable = "private";
  const publicVariable = "public";

  function privateMethod() {
    return privateVariable;
  }

  // public
  function publicMethod() {
    return privateVariable;
  }

  return {
    publicMethod: publicMethod,
    publicVariable: publicVariable,
  };
})();

console.log(MyModule.publicMethod()); // "private"
console.log(MyModule.publicVariable); // "public"
console.log(MyModule.privateVariable); // undefined
console.log(MyModule.privateMethod); // undefined
