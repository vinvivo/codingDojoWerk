# coinToss.py

'''
    Assignment: Coin Tosses
    05 July 2017
    Vinney

    Write a function that simulates tossing a coin 5,000 times. Your function
    should print how many times the head/tail appears.

    Sample output should be like the following:
        Starting the program...
        Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
        Attempt #2: Throwing a coin... It's a head! ... Got 2 head(s) so far and 0 tail(s) so far
        Attempt #3: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 1 tail(s) so far
        Attempt #4: Throwing a coin... It's a head! ... Got 3 head(s) so far and 1 tail(s) so far
        ...
        Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far
        Ending the program, thank you!

    Hint: Use the python built-in round function to convert that floating point
    number into an integer
        x = .23945593
        y = .798839238
        x_rounded = round(x)
        # x_rounded will be rounded down to 0
        y_rounded = round(y)
        # y_rounded will be rounded up to 1
'''
import random


def coinToss():
    roundCount = 1   # starting at 1 so I can use count as round number
    headCount = 0
    tailCount = 0
    print "Starting the Coin Toss program..."
    while roundCount < 5000:
        random_num = random.randint(0, 1)
        result = ""
        if random_num == 0:
            result = "head"
            headCount += 1
            roundCount += 1
        elif random_num == 1:
            result = "tail"
            tailCount += 1
            roundCount += 1
        print "Round #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(roundCount, result, headCount, tailCount)
    print "Alright, Ace, I'm cutting you off. Thanks for playing! Good bye."

coinToss()
