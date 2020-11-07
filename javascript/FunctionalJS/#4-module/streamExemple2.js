const arr = [1, 2, 3, 4, 5, 6];

const toStr = (arr) => {
  return {
    start(fn) {
      let idx = 0;
      const interval = setInterval(() => {
        fn(arr[idx++]);
      }, 100);
      return {
        stop() {
          clearInterval(interval);
        }
      }
    }
  }
}

const obj = toStr(arr);

const clear = obj.start(number => {
  const pow = Math.pow(2, number);
  pow > 20 && clear.stop();
  console.log(pow);
})
