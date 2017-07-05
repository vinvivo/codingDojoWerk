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
