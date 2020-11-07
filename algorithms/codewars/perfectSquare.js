var isSquare = function(n) {
  if (n < 0 || typeof n === "boolean") {
    return false;
  }
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};
