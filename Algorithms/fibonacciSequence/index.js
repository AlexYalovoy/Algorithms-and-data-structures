function fibonacciSequence(index) {
  if (index == 0) {
    return 0;
  }
  if (index == 1) {
    return 1;
  }
  else return fibonacciSequence(index - 1) + fibonacciSequence(index - 2);
}
module.exports.fibonacciSequence = fibonacciSequence();