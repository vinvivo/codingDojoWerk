def odd_even():     # Create a function called odd_even
    for count in range(1, 2000):    # that counts from 1 to 2000
        if count % 2 != 0:
            num = "odd number"
        elif count % 2 == 0:
            num = "even number"
        print "Number is {}. This is an {}.".format(count, num)

odd_even()