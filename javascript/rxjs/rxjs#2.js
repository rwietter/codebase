import { interval } from 'rxjs';

const time = interval(2000);

const sub = time.subscribe((num) => console.log(num));

setTimeout(() => {
  sub.unsubscribe();
}, 10000);
