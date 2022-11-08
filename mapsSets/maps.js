// what does this code return
new Set([1, 1, 2, 2, 3, 4]);
// {1,2,3,4} returns no repeats

[...new Set("referee")].join("");
// "ref" returns no repeat letters and creates string with join

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//{Array(3) => true, Array(3) => false} returns new object with key ass array and value is the boolean

//function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
let hasDuplicate = (array) => new Set(array).size !== array.length;

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
  const vowelMap = new Map();
  for (let letter of str) {
    let lowerCase = letter.toLowerCase();
    if (isVowel(lowerCase)) {
      if (vowelMap.has(lowerCase)) {
        vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
      } else {
        vowelMap.set(lowerCase, 1);
      }
    }
  }
  return vowelMap;
}
