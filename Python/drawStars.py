# drawStars.py

'''
    Assignment: Stars
    05 July 2017
    Vinney

    Part I
    Create a function called draw_stars() that takes a list of numbers and
    prints out a string of * equal to the value of the list element.

    Part II
    Modify the function above. Allow a list containing integers and strings
    to be passed to the draw_stars() function. When a string is passed,
    instead of displaying *, display the first letter of the string
    according to the example below. You may use the .lower() string method
    for this part.

    For example:
        x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
    draw_stars(x) should print the following in the terminal:
        ****
        ttt
        *
        mmmmmmm
        *****
        *******
        jjjjjjjjjjj
'''


def draw_stars(lis):
    for value in lis:  # iterates through elements in passed in lis
        count = 0   # count will tell the while loop when to stop
        stars = ""  # container for *s
        while count < value:  # loop counts up to value starting from 0
            stars += "*"    # since we want to create a string of *s vs. list of 1s, use +
            count += 1  # incrementer
        print stars

x = [4, 6, 1, 3, 5, 7, 25]   # test case
draw_stars(x)


def draw_stars_again(arg):
    for element in arg:
        counter = 0
        string = ""
        if isinstance(element, int):
            while counter < element:
                string += "*"
                counter += 1
        elif isinstance(element, str):
            while counter < len(element):
                string += element[0].lower()    # want to output lowercase
                counter += 1
        print string

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars_again(x)
