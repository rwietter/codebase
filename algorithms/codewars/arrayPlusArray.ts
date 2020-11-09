const sum = (acc: number, number: number) => acc + number;

const arrayPlusArray = (arr1: number[], arr2: number[]) => [...arr1, ...arr2].reduce(sum, 0);
