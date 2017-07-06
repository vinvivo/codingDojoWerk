class Bike(object):
    def __init__(self, price, max_speed, miles = 0):    # last parameter sets default value
        self.price = price  # in $USD
        self.max_speed = max_speed  # in miles per hour
        self.miles = miles
    def displayInfo(self):
        print "Price: ${}; Max Speed: {} mph; Mileage: {} miles".format(self.price, self.max_speed, self.miles)
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self
    def reverse(self):
        if self.miles > 0:
            print "Reversing..."
            self.miles -= 5
            return self
        else:
            print "Cannot reverse any more"
            return self

specialized = Bike(11500, 25)
felt = Bike(8999, 23)
orbea = Bike(7500, 22)

specialized.ride().ride().ride().reverse().displayInfo()
felt.ride().ride().reverse().reverse().displayInfo()
orbea.reverse().reverse().reverse().displayInfo()