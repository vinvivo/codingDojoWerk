/* jshint esversion: 6 */
function rMergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    } else if (arr.length > 1) {
        var part1 = mergeSort(arr.slice(0, Math.ceil(arr.length/2)));
        var part2 = mergeSort(arr.slice(Math.ceil(arr.length/2), arr.length));
        return merge2(part1, part2);
    } else {
        return arr;
    }
}


// Amy's helper functions
function merge2(arr1, arr2) {
    while(arr1.length > 0) {
        var i = 0;
        while (arr1[0] > arr2[i] && i < arr2.length) {
            i++;
        }
        for (var j = arr2.length - 1; j >= i; j--) {
            arr2[j + 1] = arr2[j];
        }
        arr2[i] = arr1.shift();
    }
    return arr2;
}

function merge1(arr1, arr2) {
    var result = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] > arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
    while (arr1.length > 0) {
      result.push(arr2.shift());
    }
    return result;
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

// console.time("bubbleSort");
// bubbleSort(myarr);
// console.timeEnd("bubbleSort");
