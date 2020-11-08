const flip = (d: string, a: number[]) => {
  return d === 'R'
    ? a.sort((min, max) => min - max)
    : a.sort((min, max) => max - min);
}

flip('L', [1,2,2,3,4])
flip('R', [5,5,2,3,1])
