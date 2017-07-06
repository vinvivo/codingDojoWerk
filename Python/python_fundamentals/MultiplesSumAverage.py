'''
    Assignment: Multiples, Sum, Average
    03 July 2017
    Vinney Le
'''

''' Multiples: Part I: Write code that prints all the odd numbers from 1 to
    1000. Use the for loop and don't use a list to do this exercise.'''
for num in range(1, 1000):   #Value of num loops through values 1 to 1000
    if num % 2 != 0:    #Check if num is odd, i.e., not evenly divisible by 2
        print num       #If num is odd, print it

''' Multiples: Part II - Create another program that prints all the multiples
    of 5 from 5 to 1,000,000.'''
for count in range(5, 1000000):
    if count % 5 == 0:
        print count

''' Sum List: Create a program that prints the sum of all the values in the list
a = [1, 2, 5, 10, 255, 3]'''

a = [1, 2, 5, 10, 255, 3]
count = 0
sum = 0

while count < len(a):
    for element in a:
        sum += element
        count += 1
print sum

''' Average List: Create a program that prints the average of the values in the
    list a = [1, 2, 5, 10, 255, 3]'''
a = [1, 2, 5, 10, 255, 3]
count = 0
sum = 0

while count < len(a):
    for element in a:
        sum += element
        count += 1
print sum/count
