const increment = () => ({
  start(fn) {
    let num = 0;
    const interval = setInterval(() => {
      fn(num++);
    }, 1000);
    return {
      stop() {
        clearInterval(interval);
      },
    };
  },
});

const inc = increment();

const exec = inc.start((num) => console.log(num));

setTimeout(() => {
  exec.stop();
}, 6000);
