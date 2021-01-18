import { interval, Observable } from 'rxjs';

let num = 0;

const int = interval(10);

const obs = new Observable(((subscriber) => {
  int.subscribe(() => {
    num++;
    if (num >= 4 && num <= 10) {
      subscriber.next(num);
    } else if (num > 10) {
      subscriber.unsubscribe();
    }
  });
}));

obs.subscribe(
  (n) => console.log(n),
  (err) => { throw new Error(err.message); },
  () => console.log('end'),
);
