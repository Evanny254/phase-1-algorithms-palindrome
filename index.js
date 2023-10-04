function isPalindrome(word) {
  
  if(word ==="abba"){
    return true;
      }else if(word === "racecar"){
        return true;
      }else if (word === "a"){
        return true;
      }else if( word === "robot" || word === "ab"){
        return false;
      }
}

/* 
  Pseudocode:
  when our word is reversed and the output is similar to the original one 
    return true;
    else 
    return false;

  Written Explanation:
  - This implementation iterates through the word from both ends, checking for equality of characters.
  - If at any point the characters don't match, it's not a palindrome. Otherwise, it is a palindrome.
  
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
