//: The "Basic 13" algorithms in Swift 3

import UIKit

// 1. Print 1-255 ----------------------------------------------
//    Print all the integers from 1 to 255.

func print1To255() {
    for i in 1...255 {
        print(i)
    }
}
//print1To255()


// 2. Print Odds 1-255 -----------------------------------------
//    Print all odd integers from 1 to 255.

func printOdds1To255() {
    for i in 1...255 {
        if i % 2 == 1 {
            print(i)
        }
    }
}
//printOdds1To255()



// 3. Print Ints and Sum 0-255 ---------------------------------
//    Print integers from 0 to 255, and with each integer print the running sum

func printIntsAndSum0To255() {
    var sum: Int = Int()
    for i in 0...255 {
        sum += i
        print("Integer is \(i) and sum is \(sum)")
    }
}
//printIntsAndSum0To255()



// 4. Print Array Values
//    Iterate through a given array, printing each value

func printArrayVals(arr: [Int]) {
    for num in arr {
        print(num)
    }
}
//printArrayVals(arr: [-2, -1, 0, 1, 2, 3])


// 5. Print Max of Array ----------------------------------------
//    Given an array, find and print its largest element.

func printMaxOfArray(arr: [Int]) {
    var max: Int = Int()
    for num in arr {
        if num > max {
            max = num
        }
    }
    print(max)
}
printMaxOfArray(arr: [56, 78, 2, 35, 99, 100, 101, 2, 300, 256, 8])


// 6. Print Average of Array ------------------------------------
//    Analyze an array's values and print the average

func printAverageOfArray(arr: [Double]) {
    var sum: Double = Double()
    
    for num in arr {
        sum += num
    }
    let average = Double(sum) / Double(arr.count)
    print(average)
}
printAverageOfArray(arr: [1, 2, 3, 4])

// 13. Swap String for Array Negative Values --------------------
func swapStringForArrayNegativeVals(arr: [Int]) {
    var returnArray = [Any]()
    for num in arr {
        if num >= 0 {
            returnArray.append(num)
        }
        else {
            returnArray.append("Dojo")
        }
    }
    print(returnArray)
}
//swapStringForArrayNegativeVals(arr: [-2, -1, 0, 1, 2, 3])






