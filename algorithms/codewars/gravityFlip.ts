const minmax = (min: number, max: number) => min - max;

const maxmin = (min: number, max: number) => max - min;

const flip = (d: string, a: number[]) => 
  d === 'R'
  ? a.sort(minmax)
  : a.sort(maxmin);
  

flip('L', [1,2,2,3,4])
flip('R', [5,5,2,3,1])
