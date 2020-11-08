const square = (acc: number, number: number) => acc += (number ** 2);

const squareSum = (numbers: number[]) => numbers.reduce(square, 0)

squareSum([1,2,4,6,7])
