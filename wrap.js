function wrap(string, maxLen) {
  // trim string 
  // split string into array by white spaces
  const arrOfStrings = string.trim().split(' ');
  // init empty result string
  let resultString = '';
  // init empty counter for character length ??
  let counter = 0;
  // iterate through arrays and count their lengths as we go.
  while (arrOfStrings.length > 0) {
    // concat to result string return of shift off current element, 
    const currentWord = arrOfStrings[0];
    if (currentWord.length > maxLen) {
      let firstPart = arrOfStrings[0].slice(0, maxLen)
      arrOfStrings[0] = arrOfStrings[0].slice(maxLen)

      resultString += '\n' + firstPart;
      counter = maxLen;
    } else if (counter + currentWord.length + 1 > maxLen) {
      resultString += '\n' + arrOfStrings.shift();
      counter = currentWord.length;
    } else {
      resultString += ' ' + arrOfStrings.shift();
      counter += currentWord.length + 1;
    }
  }
  return resultString.trim()
}


module.exports = wrap