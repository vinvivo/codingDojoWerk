/* jshint esversion: 6 */
function bubbleSort(arr) {
    let temp;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, -3, 5, 7, 1]));


// Tali & Jorge's -- this prevents the algorithm from unnecessarily looping through the array once it is sorted
function bubSort(arr) {
    let count = 0;
    let swapped = true;
    while (swapped === true) {
        swapped = false;
        for (let i = 0; i < arr.length - 1 - count; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        count++;
    }
    return arr;
}

// generating a test case
var myarr = [];
for (var i = 0; i < 5000; i++) {
    // myarr.push(i);               // this creates a sorted array for testing bubSort()
    myarr.push(Math.floor(Math.random() * 3000));
}

// checking the validity of a sort function
function checkSort(arr) {
    for (var i = 1; i < arr.length-1-count; i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }
    return true;
}

console.time("bubbleSort");
bubbleSort(myarr);
console.timeEnd("bubbleSort");
