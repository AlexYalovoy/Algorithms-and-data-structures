function caesarCipher(arr, bias) {
  var cipher = '';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  bias %= alphabet.length
  var newLetterIndex;
  arr = arr.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if(alphabet.indexOf(arr[i]) === -1) {
      cipher += arr[i];
    }
    else {
      newLetterIndex = (alphabet.length + alphabet.indexOf(arr[i]) + bias) % alphabet.length;
      cipher += alphabet[newLetterIndex];
    }
  }
  return cipher
}
module.exports.caesarCipher = caesarCipher;
