setTimeout(() => console.log("timeout"));

Promise.resolve()
  .then(() => console.log("promise"))
  .then(() => console.log("microtask"));

console.log("code");
