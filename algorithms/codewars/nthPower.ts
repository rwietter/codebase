function index(array: number[], n: number){
  const num = array[n];
  return num || num == 0 ? num ** n : -1;
}
