/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  else{
    let str1n = str1.split('').sort().join('');
    let str2n = str2.split('').sort().join('');
    if(str1n==str2n){
      return true;
    }
    else{
      return false;
    }
  }
}
console.log(isAnagram("hello","olleo"));

module.exports = isAnagram;
