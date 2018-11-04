function linearSearch(arr, l, r, key) {
  for (let i = l; i <= r; i++) {
    if (arr[i] == key) {
      return i;
    }   
  }
  return -1;
}
module.exports.linearSearch = linearSearch;