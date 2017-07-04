a = [1, 2, 5, 10, 255, 3]
count = 0
sum = 0

while count < len(a):
    for element in a:
        sum += element
        count += 1
print sum/count