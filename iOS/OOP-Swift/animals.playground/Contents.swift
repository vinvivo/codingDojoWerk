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
        print("Health = \(self.health).")
    }
}
var myAnimal = Animal(name: "Dot")
myAnimal.displayHealth()

// Next, create a subclass of Animal called Cat
class Cat: Animal {
                        // Modify the cat's health to be 150
    override var health: Int {
                        // Get the value from the super class
        get {
            return 150  // modify the value
        }
        set {}          // leave this blank
    }
    
    func growl() -> String {
        return "Rawr!"
    }
    
    func run() {
        print("Running ...")
        return self.health -= 10
    }
}

var myCat = Cat(name: "Lola")
myCat.displayHealth()
myCat.growl()
myCat.run()
myCat.displayHealth()
