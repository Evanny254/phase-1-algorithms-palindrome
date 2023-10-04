function isPalindrome(word) {
  
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  
  return cleanWord === cleanWord.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Remove non-alphanumeric characters from the word.
  3. Check if the cleaned word is equal to its reverse.
  4. Return true if it's a palindrome, false otherwise.

  Written Explanation:
  - We first clean the input word by converting it to lowercase and removing non-alphanumeric characters.
  - Then, we compare this cleaned word with its reverse to check if it's a palindrome.
  - If the cleaned word is the same as its reverse, the function returns true, indicating that the input word is a palindrome; otherwise, it returns false.

  You can run `node index.js` to view the console logs.
*/


if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
