# findChar.py

'''
    Assignment: Find Characters
    03 July 2017
    Vinney

    Write a program that takes a list of strings and a string containing a
    single character, and prints a new list of all the strings containing
    that character.

    Here's an example:
    # input
    word_list = ['hello','world','my','name','is','Anna']
    char = 'o'
    # output
    new_list = ['hello','world']
'''


def findChar(word_list, char):
    new_list = []   # create blank list
    for i in range(len(word_list)):     # iterates through word_list
        if word_list[i].find(char) != -1:   # checks if string contains char
            new_list.append(word_list[i])   # if yes, adds string to new_list
        else:
            continue
    print new_list

findChar(['hello', 'world', 'my', 'name', 'is', 'Anna'], 'o')
