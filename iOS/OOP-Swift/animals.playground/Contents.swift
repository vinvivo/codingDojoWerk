//: Animals
//  6 September 2017
//  Vinney Le


import UIKit

// First, create a class called Animal
class Animal {
    var name: String
    var health: Int = 100
    init(name: String) {
        self.name = name
    }
    func displayHealth() {
        print("\(self.name)'s health = \(self.health).")
    }
}
var myAnimal = Animal(name: "Dot")
myAnimal.displayHealth()

// Next, create a subclass of Animal called Cat
class Cat: Animal {
    init(catName: String) {
        super.init(name: catName)
        self.health = 150           // Modify the cat's health to be 150
    }
    func growl() -> String {
        return "Rawr!"
    }
    
    func run() {
        print("\(self.name) is running ...")
        self.health -= 10
    }
}

// Create two subclasses of Cat - Cheetah and Lion
class Cheetah: Cat {
    func sleep() {
        for _ in 1...50 {
            self.health += 1
            if self.health == 200 {
                break
            }
        }
    }
    
    override func run() {
        if self.health >= 50 {
            print("\(self.name) is running fast, watch out !!!")
            self.health -= 50
        } else {
            print("\(self.name) doesn't have enough energy to run.")
        }
    }
}

class Lion: Cat {
    init(lionName: String) {
        super.init(catName: lionName)
        self.health = 200
    }
    override func growl() -> String {
        print("ROAR!!!  I am the King of the Jungle, henny!")
        return "ROAR!!!  I am the King of the Jungle, henny!"
    }
}


var myCat = Cat(catName: "Lola")
myCat.displayHealth()
myCat.growl()
myCat.run()
myCat.displayHealth()

var chester = Cheetah(catName: "Chester")
chester.displayHealth()
chester.run()
chester.run()
chester.run()
chester.run()
chester.displayHealth()

var leesa = Lion(lionName: "Leesa")
leesa.run()
leesa.run()
leesa.run()
leesa.growl()

