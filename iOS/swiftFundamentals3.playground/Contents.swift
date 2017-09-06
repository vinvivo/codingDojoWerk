//: Swift Fundamentals III
//  05 September 2017
//  Vinney Le

import UIKit

//1. Write a program that adds the numbers 1-255 to an array

var myArray: [Int] = [Int]()

func populateArray() {
    for i in 1...255 {
        myArray.append(i)
    }
}
populateArray()



//2. Swap two random values in the array
//      Hint: you can use the arc4random_uniform(UInt32) function to get a random number from 0 to the number passed in. The arc4random_uniform function takes in one parameter that is of the UInt32 type and returns a random number that is of the UInt32 type. How can you deal with this using your knowledge of types?

func randomNum() -> Int {
    return Int(arc4random_uniform(UInt32(myArray.count)))
}

func swapTwo(array arr: inout [Int]) -> [Int] {
    var temp: Int
    let num1: Int = randomNum()
    let num2: Int = randomNum()
    temp = arr[num2]
    arr[num2] = arr[num1]
    arr[num1] = temp
    return arr
}
swapTwo(array: &myArray)
print("Result of swapTwo \(myArray)")



//3. Now write the code that swaps random values 100 times (You've created a "Shuffle"!)

func shuffle(array: inout [Int], thisManyTimes t: Int) -> [Int] {
    var i = 0
    while i < t {
        swapTwo(array: &array)
        i += 1
    }
    return array
}
shuffle(array: &myArray, thisManyTimes: 100)
print("Result of shuffle \(myArray)")



//4. Remove the value "42" from the array and Print "We found the answer to the Ultimate Question of Life, the Universe, and Everything at index __" and print the index of where "42" was before you removed it.

func findFortyTwo(array arr: [Int]) -> Int {
    var theAnswer: Int = Int()
    for i in 0..<arr.count {
        if arr[i] == 42 {
            print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(i).")
            theAnswer = i
        }
    }
    return theAnswer
}

findFortyTwo(array: myArray)

