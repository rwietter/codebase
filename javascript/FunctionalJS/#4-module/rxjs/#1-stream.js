const { interval } = require('rxjs')


const round = interval(100);

const sub = round.subscribe(num => {
  const pow = Math.pow(2, num)
  pow === 1024 && unsubscribe();
  console.log(pow)
})

const unsubscribe = () => sub.unsubscribe();
