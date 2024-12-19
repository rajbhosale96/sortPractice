const isOdd = function (number) {
  return number % 2 !== 0;
};

const number = [10, 31, 1, 2, 3, 4, 5, 6, 7, 8];

number.sort(function (a, b) {
  if (isOdd(a) && !isOdd(b)) {
    return -1;
  }
  if (!isOdd(a) && isOdd(b)) {
    return 1;
  }

  return a - b;
});