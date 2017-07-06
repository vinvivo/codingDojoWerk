'''
    Assignment: Filter by Type
    03 July 2017
    Vinney Le
    Write a program that, given some value, tests that value for its type.
    Here's what you should do for each type:
    Integer: If the integer is greater than or equal to 100, print "That's a
    big number! If the integer is less than 100, print "That's a small number"
    String: If the string is greater than or equal to 50 characters, print
    "Long sentence." If the string is shorter than 50 characters, print "Short
    sentence."
    List: If the length of the list is greater than or equal to 10, print "Big
    list!" If the list has fewer than 10 values, print "Short list."
'''
sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1, 7, 4, 21]
mL = [3, 5, 7, 34, 3, 2, 113, 65, 8, 89]
lL = [4, 34, 22, 68, 9, 13, 3, 5, 7, 9, 2, 12, 45, 923]
eL = []
spL = ['name', 'address', 'phone number', 'social security number']


def sizeQueen(val):
    if isinstance(val, int):
        if val >= 100:
            print "Oh, my! That's a BIG... number!"
        else:
            print "Oh, my! That's a small... number."
    elif isinstance(val, str):
        if len(val) >= 50:
            print "Wow! What a long... sentence."
        else:
            print "Wow! What a short... sentence."
    elif isinstance(val, list):
        if len(val) >= 10:
            print "Oh, that's a BIG... list!"
        else:
            print "Oh, that's a short... list."
    else:
        print "Oh... what's that?"

sizeQueen(sI)
sizeQueen(mI)
sizeQueen(bI)
sizeQueen(eI)
sizeQueen(spI)
sizeQueen(sS)
sizeQueen(mS)
sizeQueen(bS)
sizeQueen(eS)
sizeQueen(aL)
sizeQueen(mL)
sizeQueen(lL)
sizeQueen(eL)
sizeQueen(spL)
