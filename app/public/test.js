 

var array1 = [2, 4, 5, 6, 20, 8, 9, 10];
var array2 = [5, 5, 13, 20, 8, 9, 20, 11];

var compare = 0;

var addSum = 0;

var execute = true;

// Finds the difference between two arrays and returns an array of the differences.
function difference(arr1) {
for (let i = 0; i < arr1.length; i++) {
    var results = Math.abs(array1[i] - array2[i])
    compare = addSum += results;
    
}
    
}

console.log(compare);
difference(array1);