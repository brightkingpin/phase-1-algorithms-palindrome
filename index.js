function isPalindrome(str) {
  // Write your algorithm here

    // To make the comparison case-insensitive, change the string's case to lowercase.
    str = str.toLowerCase();
  
    // Compare the characters as you iterate over the string.
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    
    // The string is a palindrome if the loop ends with no mismatches being discovered.
    return true;
}

/* 
  Add your pseudocode here

  function isPalindrome(str):
  // To make the comparison case-insensitive, change the string's case to lowercase.
  str = toLowerCase(str)
  
  // Compare the characters as you iterate over the string.
  for i from 0 to length(str) / 2:
    // If the characters at both ends of the string are not equal, return false
    if str[i] != str[length(str) - i - 1]:
      return false
  
  // The string is a palindrome if the loop ends with no mismatches being discovered.
  return true

*/

/*
  Add written explanation of your solution here

  A string named str is passed as an argument to the isPalindrome function. Finding out if str is a palindrome is the function's main objective.

First, the function uses the built-in toLowerCase method to transform the input string to lowercase. To ensure that the comparison is case-insensitive, this is done.

The function then iterates through the string str, starting at the beginning and ending in the middle (or halfway point). The loop compares the characters at the string's beginning and end. The function immediately returns false, indicating that the string is not a palindrome, if any characters do not match.

The method returns true, indicating that the string is a palindrome, if the loop is finished without discovering any mismatches. In general, the function solves the challenge of determining whether or not a given string is a palindrome using a straightforward and effective method.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
