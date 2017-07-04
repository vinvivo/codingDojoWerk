# compareArrays.py

'''
    Assignment: Compare Arrays
    03 July 2017
    Vinney Le

    Write a program that compares two lists and prints a message depending on
    if the inputs are identical or not.

    Your program should be able to accept and compare two lists: list_one and
    list_two. If both lists are identical, print "The lists are the same". If
    they are not identical, print "The lists are not the same." Try the
    following test cases for lists one and two:
'''
list_one1 = [1, 2, 5, 6, 2]
list_two1 = [1, 2, 5, 6, 2]

list_one2 = [1, 2, 5, 6, 5]
list_two2 = [1, 2, 5, 6, 5, 3]

list_one3 = [1, 2, 5, 6, 5, 16]
list_two3 = [1, 2, 5, 6, 5]

list_one4 = ['celery', 'carrots', 'bread', 'milk']
list_two4 = ['celery', 'carrots', 'bread', 'cream']


def twinsies(list_one, list_two):
    message = "The lists are the same."  # sets default message
    if len(list_one) == len(list_two):
        for i in range(len(list_one)):
            if list_one[i] == list_two[i]:
                continue
            else:
                message = "The lists are not the same."
    else:
        message = "The lists are not the same."
    print message
    print "Good bye!"

twinsies(list_one1, list_two1)
twinsies(list_one2, list_two2)
twinsies(list_one3, list_two3)
twinsies(list_one4, list_two4)

'''
This algorithm is more compact, but does not provide practice with logic.

def twinning(list_one, list_two):
    if list_one == list_two:
        print "The lists are the same."
    elif list_one != list_two:
        print "The lists are not the same."
twinning(list_one1, list_two1)
twinning(list_one2, list_two2)
twinning(list_one3, list_two3)
twinning(list_one4, list_two4)'''
