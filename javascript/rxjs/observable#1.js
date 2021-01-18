import { Observable } from 'rxjs';

const obs = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

obs.subscribe((num) => console.log(num));
