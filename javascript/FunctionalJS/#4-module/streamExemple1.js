const generator = () => {
  return {
    start(fn) {
      let num = 0;
      const interval = setInterval(() => {
        fn(++num);
      }, 100);
      return {
        stop() {
          clearInterval(interval);
        }
      }
    }
  };
}

const gen = generator()

const start = gen.start(number => {
  console.log(number)
  number === 10 && start.stop()
})
