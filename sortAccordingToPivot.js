const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const something = function (pivot) {
  return function (a, b) {
    if (a <= pivot || b <= pivot) {
      return a - b;
    }

    return b - a;
  };
};

const sortAroundPivot = something(5);

console.log(numbers.sort(sortAroundPivot));