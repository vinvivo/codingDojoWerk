# scoresGrades.py

'''
    Assignment: Scores and Grades
    05 July 2017
    Vinney

    Write a function that generates ten scores between 60 and 100. Each time a
    score is generated, your function should display what the grade is for a
    particular score. Here is the grade table:
        Score: 60 - 69; Grade - D
        Score: 70 - 79; Grade - C
        Score: 80 - 89; Grade - B
        Score: 90 - 100; Grade - A
    The result should be like this:
        Scores and Grades
        Score: 87; Your grade is B
        Score: 67; Your grade is D
        Score: 95; Your grade is A
        Score: 100; Your grade is A
        Score: 75; Your grade is C
        Score: 90; Your grade is A
        Score: 89; Your grade is B
        Score: 72; Your grade is C
        Score: 60; Your grade is D
        Score: 98; Your grade is A
        End of the program. Bye!
    Hint: Use the python random module to generate a random number
        import random
        random_num = random.random()
        # the random function will return a floating point number, that is
        # 0.0 <= random_num < 1.0
        # or use...
        random_num = random.randint()
'''
import random


def howKevinShouldNotGrade():
    count = 0
    print "Scores and Grades"
    while count < 10:
        grade = ""
        random_num = random.randint(60, 100)
        if random_num >= 60 and random_num <= 69:
            grade = "D"
            count += 1
        elif random_num >= 70 and random_num <= 79:
            grade = "C"
            count += 1
        elif random_num >= 80 and random_num <= 89:
            grade = "B"
            count += 1
        elif random_num >= 90 and random_num <= 100:
            grade = "A"
            count += 1
        print "Score: {}; Your grade is {}".format(random_num, grade)
    print "End of the program. kthxbai!"

howKevinShouldNotGrade()
