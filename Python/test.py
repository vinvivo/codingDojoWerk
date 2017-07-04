def isStr (list):
    count = 0
    sum = 0
    strings = []
    while count < len(list):
        for element in list:
            if isinstance(element, str):
                strings.append(element)
                count += 1
        print "The array you entered is of string type"
        print "String:", " ".join(strings)

isStr(["magical unicorns","hello","world"])
