def multiply(lis, multiplier):
    multiples = []  # create new list to hold calculated products
    for multiplicand in lis:    # iterates through each element in lis
        multiplicand *= multiplier  # multiplies element by multiplier
        multiples.append(multiplicand)  # adds product to new list
    return multiples    # returns new list so it can be printed

def layered_multiples(arr):  # given
    new_array = []  # create new list to hold modified results
    for val in arr:  # iterates through elements in passed in arr
        count = 0   # count will tell the while loop when to stop
        string = []  # container for 1s
        while count < val:  # loop counts up to val starting from 0
            string.append(1)    # since we want to create a list of 1s vs. string of 1s, use .append
            count += 1  # incrementer
        new_array.append(string)    # appends string to new_array to create nested list
    return new_array
x = layered_multiples(multiply([2, 4, 5], 3))
print x