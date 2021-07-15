console.log(1);
setTimeout(() => {
console.log(2);
});
new Promise(resolve => {
console.log(5);
resolve();
console.log(6);
}).then(() => {
console.log(7);
});
Promise.resolve().then(() => {
console.log(8);
process.nextTick(() => {
  console.log(9);
});
});