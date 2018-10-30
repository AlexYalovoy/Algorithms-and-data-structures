function stringReverse(arr) {
  var leftArr = '';
  var rightArr = '';

  for (let i = 0; i < Math.round((arr.length - 1) / 2); i++) {
    leftArr += arr[Math.round((arr.length - 1) / 2) - (i + 1)];
    rightArr += arr[arr.length - (i + 1)];
  }

  if( !rightArr.endsWith(arr[Math.round((arr.length - 1) / 2)]) ) { 
    rightArr += arr[Math.round((arr.length - 1) / 2)];
  }

  return rightArr.concat(leftArr);
}

function stringReverseDefault(arr) {
  var newArr = '';
  for (let i = 0; i < arr.length; i++) {
    newArr += arr[arr.length - 1 - i];
  }
  return newArr;
}

module.exports = {
  stringReverse: stringReverse(),
  stringReverseDefault: stringReverseDefault()
};