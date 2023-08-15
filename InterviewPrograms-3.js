//Question 11: Remove Duplicates from an Array
//Write a function that takes an array as input and returns an array with duplicate elements removed.


function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//Question 12: Object Property Value Sum
//Write a function that calculates the sum of all numeric values in an object.


function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
}

const data = {
  apples: 5,
  bananas: 8,
  oranges: 3
};

const total = sumObjectValues(data);
console.log(total); // Output: 16

//Question 13: Count Characters in a String
//Write a function that takes a string as input and returns an object containing the count of each character.


function countCharacters(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const inputString = 'hello';
const charCounts = countCharacters(inputString);
console.log(charCounts); // Output: { h: 1, e: 1, l: 2, o: 1 }

//Question 14: Longest Word in a Sentence
//Write a function that finds and returns the longest word in a given sentence.


function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const inputSentence = 'The quick brown fox jumped over the lazy dog';
const longest = longestWord(inputSentence);
console.log(longest); // Output: "jumped"

//Question 15: Reverse Words in a Sentence
//Write a function that reverses the order of words in a sentence.


function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

const inputSentence_ = 'Hello world, how are you?';
const reversed = reverseWords(inputSentence_);
console.log(reversed); // Output: "you? are how world, Hello"


//Question 19: Find Common Elements in Arrays
//Write a function that finds and returns the common elements between two arrays.


function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
