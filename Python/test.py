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