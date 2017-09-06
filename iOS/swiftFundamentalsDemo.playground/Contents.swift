//: Playground - noun: a place where people can play

import UIKit

var dictionary = [
    "Kobe": 24,
    "Lebron": 23,
    "Rondo": 9
]

dictionary["Kobe"]

if let jerseyNumber = dictionary["Kobe"] {
    print(jerseyNumber)
}

func sayHello(name: String) {
    print("Hello, \(name), how are you doing today?")
}

sayHello(name: "Vinney")

func printDescriptionWithWidth(w: Int, andHeight h: Int) {
    print("My width is \(w) and my height is \(h)")
}
printDescriptionWithWidth(w: 10, andHeight: 20)


//: In-out Parameters

var myInt = 1
func changeMyInt(someInt: inout Int) {
    someInt += 1
    print(someInt)
}

changeMyInt(someInt: &myInt)
print(myInt)


//: Default parameter values
                // adding {{ = "string" }} creates a default value 
func sayHey(name: String = "buddy") {
    print("Hello, \(name). How are you doing today?")
}

sayHey(name: "Yoda")
sayHey()


