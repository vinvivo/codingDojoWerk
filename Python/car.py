""" Assignment: Car
    05 July 2017
    Vinney

    Create a class called  Car. In the__init__(), allow the user to specify the
    following attributes: price, speed, fuel, mileage. If the price is greater
    than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%.

    Create six different instances of the class Car. In the class have a method
    called display_all() that returns all the information about the car as a
    string. In your __init__(), call this display_all() method to display
    information about the car once the attributes have been defined.
"""


class Car(object):
    def __init__(self, price, speed, fuel, mileage, tax = 0.12):
        self.price = price  # in $USD
        self.speed = speed  # in miles per gallon
        self.fuel = fuel    # qualitative values
        self.mileage = mileage
        self.tax = tax
        if self.price > 10000:
            self.tax = 0.15

    def display_all(self):
        print "Price: ${}; Speed: {} mph; Fuel: {}; Mileage: {} miles; Tax: {}%".format(self.price, self.speed, self.fuel, self.miles, self.tax * 100)


toyota = Car(10000, 90, "Full", 40)
tesla = Car(101000, 120, "Full", 99)
alfa_romeo = Car(41999, 95, "Half full", 25)
peugeot = Car(8800, 80, "Full", 30)
fisker = Car(109800, 140, "Empty", 30)
renault = Car(9000, 80, "Half full", 33)

toyota.display_all()
tesla.display_all()
alfa_romeo.display_all()
peugeot.display_all()
fisker.display_all()
renault.display_all()
