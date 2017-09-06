//: Heads or Tails
//  05 September 2017
//  Vinney Le
//
//  In this exercise, we are going to focus on writing clean and organized code using functions! When using functions it is important to be descriptive and to organize your code to have a separation of concerns. Let's see this in action:
//
//  1. Create a function tossCoin() -> String
//     - Have this function print "Tossing a Coin!"
//     - Next have the function randomly pick either "Heads" or "Tails"
//     - Have the function print the result
//     - Finally, have the function return the result
//  2. Now create another function tossMultipleCoins(Int) -> Double
//     - Have this function call the tossCoin function multiple times based on the Integer input
//     - Have the function return a Double that reflects the ratio of head toss to total toss

import UIKit

//Exercise 1
func tossCoin() -> String {
    print("Tossing a coin! ...")
    
    let randomNum = arc4random_uniform(UInt32(2))
    
    var result: String = ""
    
    if randomNum == 0 {
        result = "Heads"
    }
    if randomNum == 1 {
        result = "Tails"
    }
    print("You got \(result).")
    return result
}
//tossCoin()


//Exercise 2
func tossMultipleCoins(thisManyTimes t: Int) -> Double {
    var i = 0
    var headsCount: Double = 0
    var tailsCount: Double = 0
    while i < t {
        let result: String = tossCoin()
        if result == "Heads" {
            headsCount += 1
        }
        if result == "Tails" {
            tailsCount += 1
        }
        i += 1
    }
    let ratio = headsCount / Double(t)
    print("headsCount = \(headsCount)")
    print("tailsCount = \(tailsCount)")
    print("Ratio of Heads:Total = \(ratio)")
    return ratio
}
tossMultipleCoins(thisManyTimes: 350)