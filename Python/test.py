import random

def coinToss():
    roundCount = 1   # starting at 1 so I can use count as round number
    headCount = 0
    tailCount = 0
    print "Starting the Coin Toss program..."
    while roundCount < 5000:  # 5001 because I want to include 5000
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