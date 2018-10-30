function insertionSort(array) {
  var insertedItem;
  var j;
  for (let i = 1; i < array.length; i++) {
    insertedItem = array[i];
    j = i - 1;

    while(j >= 0 && array[j] > insertedItem) {
      array[j+1] = array[j];
      j--;
    }
    array[j + 1] = insertedItem;
  }
  return array;
}
module.exports.insertionSort = insertionSort;