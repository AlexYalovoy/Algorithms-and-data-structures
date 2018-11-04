function insertionSort(array) {
  var insertedItem;
  var j;
  for (let i = 0; i < array.length; i++) {
    insertedItem = array[i];  // Every time select another element
    j = i - 1;

    while(j >= 0 && array[j] > insertedItem) {
      array[j+1] = array[j];  // Move sorted arr right to free space
      j--;
    }
    array[j + 1] = insertedItem;
  }
  return array;
}
module.exports.insertionSort = insertionSort;