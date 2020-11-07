const map = (arr: number[], fn: Function) => {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(fn(arr[i]));
  }
  return result
}

const arr = [1, 3, 5, 6, 7];

const double = map(arr, (value: number) => value * 2);
const price = map(arr, (value: number) => ({ value: value }));

console.log(double); // [ 2, 6, 10, 12, 14 ]
console.log(price); // [{ value: 1 }, { value: 3 }, { value: 5 }, { value: 6 }, { value: 7 }]; 
