""" Assignment: OOP | Product
    05 July 2017
    Vinney

    Create an Animal class and give it the below attributes and methods.
    Extend the Animal class to two child classes, Dog and Dragon.

    Objective
    The objective of this assignment is to help you understand inheritance.
    Remember that a class is more than just a collection of properties and
    methods. If you want to create a new class with attributes and methods
    that are already defined in another class, you can have this new class
    inherit from that other class (called the parent) instead of copying and
    pasting code from the original class. Child classes can access all the
    attributes and methods of a parent class AND have new attributes and
    methods of its own, for child instances to call. As we see with Wizard /
    Ninja / Samurai (that are each descended from Human), we can have numerous
    unique child classes that inherit from the same parent class.

    Animal Class
        Attributes:
        - name
        - health
        Methods:
        - walk: decreases health by one
        - run: health decreases by five
        - display health: print to the terminal the animal's health.
    Create an instance of the Animal, have it walk() three times, run() twice,
    and finally displayHealth() to confirm that the health attribute has
    changed.

    Dog Class
        - inherits everything from Animal
        Attributes:
        - default health of 150
        Methods:
        - pet: increases health by 5
    Have the Dog walk() three times, run() twice, pet() once, and have it
    displayHealth().

    Dragon Class
        - inherits everything from Animal
        Attributes:
        - default health of 170
        Methods:
        - fly: decreases health by 10
        - display health: prints health by calling the parent method and
        prints "I am a Dragon"

    Now try creating a new Animal and confirm that it cannot call the pet()
    and fly() methods, and it's displayHealth() is not saying 'this is a
    dragon!'. Also confirm that your Dog class cannot fly().
"""


class Animal(object):

    def __init__(self, name, health):
        self.name = name
        self.health = health
        self.display_health()

    def walk(self):
        print self.name, "is walking... -1 HP"
        self.health -= 1
        return self

    def run(self):
        print self.name, "is running... -5 HP"
        self.health -= 5
        return self

    def display_health(self):
        print "Hi, I'm {}. I have {} health points.".format(self.name, self.health)


liger = Animal("Liger", 100)
liger.walk().walk().walk().run().run().display_health()


class Dog(Animal):

    def __init__(self):
        super(Dog, self).__init__("Fido", 150)

    def pet(self):
        print self.name, "likes petting... +5 HP"
        self.health += 5
        return self


fido = Dog()
fido.walk().walk().walk().run().run().pet().display_health()


class Dragon(Animal):

    def __init__(self):
        super(Dragon, self).__init__("Norbert", 170)

    def display_health(self):
        super(Dragon, self).display_health()
        print "I am Dragon"

    def fly(self):
        print self.name, "is flying... -10 HP"
        self.health -= 10
        return self


norbert = Dragon()
norbert.walk().run().fly().display_health()


# snake = Animal("Ekans", 90)
# snake.pet().display_health()
# snake.fly().display_health()

# fido.fly().display_health()
