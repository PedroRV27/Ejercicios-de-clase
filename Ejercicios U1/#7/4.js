const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const combinedArray = combineTwoArrays(array1, array2);


function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  console.log(combinedArray);