/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:


***********************************************************************/

function flatten(arr, newArr = []) {
  if(arr.length === 0) return newArr

  for(let i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i])
    }else{
      flatten(arr[i], newArr)
    }
    
  }
  return newArr
}

// flatten([]); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
