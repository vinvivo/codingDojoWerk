""" Assignment: OOP | Product
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


class Product(object):
    def __init__(self, price, name, brand, weight, cost):
        self.price = price          # in $USD
        self.name = name
        self.brand = brand
        self.weight = weight        # in oz
        self.cost = cost            # in $USD
        self.status = "for sale"    # "for sale" or "sold"

    def sell(self):
        """Changes the status to "sold" """
        self.status = "sold"
        return self

    def add_tax(self, tax):         # tax parameter is decimal
        """Adds tax to the price to determine total price"""
        self.tax = tax
        self.price *= (1.0 + tax)     # adds tax to price
        return self

    def return_item(self, reason_for_return):
        """Modifies status and price according to reason_for_return"""
        self.reason_for_return = reason_for_return
        if reason_for_return == "defective":
            self.status = "defective"
            self.price = 0
        elif reason_for_return == "unopened, like new":
            self.status = "for sale"
        elif reason_for_return == "opened":
            self.status = "used"
            self.price *= 0.8       # adds 20% discount
        return self

    def display_info(self):
        print "Price: $" + str(self.price)
        print "Item Name:", self.name
        print "Brand:", self.brand
        print "Weight:", self.weight, "oz."
        print "Cost: $" + str(self.cost)
        print "Status:", self.status


# test cases
phone = Product(649, "iPhone 7 Plus", "Apple", 6.63, 224.80)
# phone.display_info()
    """Should return:
       Price: $649
       Item Name: iPhone 7 Plus
       Brand: Apple
       Weight: 6.63 oz.
       Cost: $224.8
       Status: for sale
    """
# phone.add_tax(0.08).sell().display_info()
    """Should return:
       Price: $700.92
       Item Name: iPhone 7 Plus
       Brand: Apple
       Weight: 6.63 oz.
       Cost: $224.8
       Status: sold
    """
# phone.add_tax(0.08).sell().return_item("defective").display_info()
    """Should return:
       Price: $0
       Item Name: iPhone 7 Plus
       Brand: Apple
       Weight: 6.63 oz.
       Cost: $224.8
       Status: defective
    """
# phone.add_tax(0.08).sell().return_item("unopened, like new").display_info()
    """Should return:
       Price: $700.92
       Item Name: iPhone 7 Plus
       Brand: Apple
       Weight: 6.63 oz.
       Cost: $224.8
       Status: for sale
    """
# phone.add_tax(0.08).sell().return_item("opened").display_info()
    """Should return:
       Price: $560.736
       Item Name: iPhone 7 Plus
       Brand: Apple
       Weight: 6.63 oz.
       Cost: $224.8
       Status: used
    """
