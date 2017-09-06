//: Playground - noun: a place where people can play

import UIKit
//---------------------------------------------
class Person {
    var species = "H. sapiens"
    var name: String
    init(name: String) {
        self.name = name
    }
    func speak() {
        print("Hello! I am an organism of the \(self.species) species and my name is \(self.name)")
    }
}

var myPerson: Person = Person(name: "Vinney")
print("\(myPerson.species)")

myPerson.speak()

//---------------------------------------------

struct Rectangle {
    var width = 10
    var height = 20
    func printDesc() {
        print("I have a width of \(width) and a height of \(height)")
    }
}
var myRectangle = Rectangle()
print("\(myRectangle.width)")

//--------------------------------------------

class Developer: Person {
    var favoriteLanguage: String
    init(name: String, favoriteLanguage: String) {
        self.favoriteLanguage = favoriteLanguage
        super.init(name: name)
    }
    override func speak() {
        print("Hello, I am a Developer! I am of the \(self.species) species and my name is \(self.name). My favorite language is \(self.favoriteLanguage)")
    }
}
var myDeveloper: Developer = Developer(name: "Vinney", favoriteLanguage: "Swift")
myDeveloper.speak()