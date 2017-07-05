def draw_stars_again(arg):
    for element in arg:
        counter = 0
        string = ""
        if isinstance(element, int):
            while counter < element:
                string += "*"
                counter += 1
        elif isinstance(element, str):
            while counter < len(element):
                string += element[0].lower()
                counter += 1
        print string
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars_again(x)