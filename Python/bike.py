# bike.py

'''
    Assignment: Bike
    05 July 2017
    Vinney

    Create a new class called Bike with the following properties/attributes:
        price
        max_speed
        miles

    Create 3 instances of the Bike class.

    Use the __init__() function to specify the price and max_speed of each
    instance (e.g. bike1 = Bike(200, "25mph");
    In the __init__() also write the code so that the initial miles is set to
    be 0 whenever a new instance is created.

    Add the following functions to this class:
        displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
        ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
        reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
    Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().

    What would you do to prevent the instance from having negative miles?

    Which methods can <return self> in order to allow chaining methods?
'''


class Bike(object):
    def __init__(self, price, max_speed, miles=0):    # last parameter sets default value
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
        if self.miles >= 5:  # prevents going into negative
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
