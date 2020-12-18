function tail<T extends any[]>(arr: readonly [any, ...T]) {
  const [_ignored, ...rest] = arr;
  return rest;
}

const myTuple = [1, 2, 3, 4] as const;
const myArray = ["hello", "world"];

const r1 = tail(myTuple);
//    ^ = const r1: [2, 3, 4]

const r2 = tail([...myTuple, ...myArray] as const);
//    ^ = const r2: [2, 3, 4, ...string[]]

// ---------------------------------------------

type Arr = number[] | string[];

function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}

console.log(concat([1,2,3,4], ['Hello', 'World']))
