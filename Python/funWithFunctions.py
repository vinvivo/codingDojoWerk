# funWithFunctions.py

'''
    Assignment: Fun with Functions
    05 July 2017
    Vinney

    Odd/Even:
        Create a function called odd_even that counts from 1 to 2000. As your
        loop executes have your program print the number of that iteration and
        specify whether it's an odd or even number.

        Your program output should look like below:
            Number is 1.  This is an odd number.
            Number is 2.  This is an even number.
            Number is 3.  This is an odd number.
            ...
            Number is 2000.  This is an even number.

    Multiply:
        Create a function called 'multiply' that iterates through each value
        in a list (e.g. a = [2, 4, 10, 16]) and returns a list where each
        value has been multiplied by 5.

        The function should multiply each value in the list by the second
        argument. For example, let's say:
            a = [2, 4, 10, 16]
        Then:
            b = multiply(a, 5)
            print b
        Should print [10, 20, 50, 80 ].

    Hacker Challenge:
        Write a function that takes the multiply function call as an argument.
        Your new function should return the multiplied list as a
        two-dimensional list. Each internal list should contain the number of
        1's as the number in the original list. Here's an example:

            def layered_multiples(arr):
                # your code here
                return new_array
            x = layered_multiples(multiply([2, 4, 5], 3))
            print x
            # output
            >>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1]]
'''


# Odd/Even:
def odd_even():     # Create a function called odd_even
    for count in range(1, 2001):    # that counts from 1 to 2000 (inclusive)
        if count % 2 != 0:  # determines if count is odd
            num = "odd number"
        elif count % 2 == 0:    # determines if count is even
            num = "even number"
        print "Number is {}. This is an {}.".format(count, num)  # interpolate

odd_even()


# Multiply
def multiply(lis, multiplier):
    multiples = []  # create new list to hold calculated products
    for multiplicand in lis:    # iterates through each element in lis
        multiplicand *= multiplier  # multiplies element by multiplier
        multiples.append(multiplicand)  # adds product to new list
    return multiples    # returns new list so it can be printed

a = [2, 4, 10, 16]  # test case
b = multiply(a, 5)
print b


# Hacker Challenge:
def layered_multiples(arr):  # given
    new_array = []  # create new list to hold modified results
    for val in arr:  # iterates through elements in passed in arr
        count = 0   # count will tell the while loop when to stop
        string = []  # container for 1s
        while count < val:  # loop counts up to val starting from 0
            string.append(1)    # since we want to create a list of 1s vs. string of 1s, use .append
            count += 1  # incrementer
        new_array.append(string)    # appends string to new_array to create nested list
    return new_array    # returns new_array for printing

x = layered_multiples(multiply([2, 4, 5], 3))   # test case
print x
