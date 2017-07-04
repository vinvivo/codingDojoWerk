def listType(list):
    count = 0
    total = 0
    strings = []

    while count < len(list):
        for element in list:
            if isinstance(element, int):
                total += element
                count += 1
            if isinstance(element, float):
                total += element
                count += 1
            if isinstance(element, str):
                strings.append(element)
                count += 1
    if not total:
        print "The list you entered is of string type."
        print "Strings:", " ".join(strings)
    elif not strings:
        print "The list you entered is of integer and/or float type."
        print "Sum:", total
    else:
        print "The list you entered is of mixed type."
        print "Strings:", " ".join(strings)
        print "Sum:", total

listType(['magical unicorns', 19, 'hello', 98.98, 'world'])
listType([1, 2, 3, 4, 5])
listType(["Hello", "world"])
listType([1.0, 2.0, 3.0, 4.0, 5.0])
