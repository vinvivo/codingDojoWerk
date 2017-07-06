""" Assignment: Product
    05 July 2017
    Vinney

    The owner of a store wants a program to track products. Create a product
    class to fill the following requirements.

    Product Class:
    Attributes:
    - Price             - Brand
    - Item Name         - Cost
    - Weight            - Status: default "for sale"

    Methods:
    - Sell: changes status to "sold"
    - Add tax: takes tax as a decimal amount as a parameter and returns the 
      price of the item including sales tax
    - Return: takes reason for return as a parameter and changes status
      accordingly. If the item is being returned because it is defective change
      status to defective and change price to 0. If it is being returned in the
      box, like new mark it as for sale. If the box has been opened set status
      to used and apply a 20% discount.
    - Display Info: show all product details.

    Every method that doesn't have to return something should return self so
    methods can be chained.
"""


class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price  # in $USD
        self.speed = speed  # in miles per gallon
        self.fuel = fuel    # qualitative values
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()

    def display_all(self):
        print "Price: ${}; Speed: {} mph; Fuel: {}; Mileage: {} miles; Tax: {}%".format(self.price, self.speed, self.fuel, self.mileage, self.tax * 100)


toyota = Car(10000, 90, "Full", 40)
tesla = Car(101000, 120, "Full", 99)
alfa_romeo = Car(41999, 95, "Half full", 25)
peugeot = Car(8800, 80, "Full", 30)
fisker = Car(109800, 140, "Empty", 30)
renault = Car(9000, 80, "Half full", 33)

