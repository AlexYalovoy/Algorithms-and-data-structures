function binarySearch(arr, key) {
  let l = 0;
  let r = arr.length - 1;
  let i = Math.round(r / 2);
  while(arr[i] != key) {
    if(arr[i] < key) 
      l = i;
    else 
      r = i - 1;
    i = l + Math.round((r-l)/2);
  }
  return i;
}

module.exports.binarySearch = binarySearch;