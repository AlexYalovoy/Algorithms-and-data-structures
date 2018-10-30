function binarySearch(arr, key) {
  var l = 0;
  var r = arr.length - 1;
  var i = Math.round(r / 2);
  while(arr[i] != key) {
    if(arr[i] < key) 
      l = i;
    else 
      r = i - 1;
    i = l + Math.round((r-l)/2);
  }
  return i;
}

module.exports.binarySearch = binarySearch();