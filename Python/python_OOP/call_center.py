""" Assignment: OOP | Math Dojo
    06 July 2017
    Vinney

    You're creating a program for a call center. Every time a call comes in
    you need a way to track that call. One of your program's requirements is
    to store calls in a queue while callers wait to speak with a call center
    employee.

    You will create two classes. One class should be Call, the other
    CallCenter.

    Call Class: Create your call class with an init method. Each instance of
    Call() should have:
        Attributes:
            - unique id
            - caller name
            - caller phone number
            - time of call
            - reason for call
        Methods:
            - display: that prints all Call attributes.

    CallCenter Class: Create you call center class with an init method. Each
    instance of CallCenter() should have the following attributes:
        Attributes:
        - calls: should be a list of call objects
        - queue size: should be the length of the call list
        Methods:
        - add: adds a new call to the end of the call list
        - remove: removes the call from the beginning of the list (index 0).
        - info: prints the name and phone number for each call in the queue as
        well as the length of the queue.

    You should be able to test your code to prove that it works. Remember to
    build one piece at a time and test as you go for easier debugging!

    Ninja Level: add a method to call center class that can find and remove a
    call from the queue according to the phone number of the caller.

    Hacker Level: If everything is working properly, your queue should be
    sorted by time, but what if your calls get out of order? Add a method to
    the call center class that sorts the calls in the queue according to time
    of call in ascending order.
"""
import uuid         # for creating unique ID numbers
import time         # for generating time stamp
import datetime     # for generating time stamp
import random       # for generating phone number
import pprint       # for printing readable lists

instances = []     # used to track number of instances of Call objects

class Call(object):

    def __init__(self, name, reason):   # takes 2 parameters
        self.uuid = uuid.uuid4()
        self.name = name
        """<phone number generator>"""
        randomNum1 = 415
        randomNum2 = random.randint(200,999)
        randomNum3 = random.randint(1000,9999)
        self.phoneNum = "{}-{}-{}".format(randomNum1, randomNum2, randomNum3)
        """</phone number generator>"""
        """<time stamp generator>"""
        ts = time.time()
        st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        self.time = st
        """</time stamp generator>"""
        self.reason = reason
        instances.append(name + " " + self.phoneNum)  # adds this instance to the tracking list

    def display(self):
        print "NEW CALL"
        print "    ID:     ", self.uuid
        print "    Name:   ", self.name
        print "    Number: ", self.phoneNum
        print "    Time:   ", self.time
        print "    Reason: ", self.reason


class CallCenter(object):
    
    def __init__(self):
        """__init__ creates a callback for instances list and counts queue"""
        self.calls = instances
        self.queue = len(instances)

    def add(self, instName, name, reason):
        """adds new call with specified arguments"""
        self.instName = Call(name, reason)
        return self
    
    def remove(self):
        """removes caller at top of list, i.e., instances[0]"""
        instances.pop(0)
        return self

    def info(self):
        """prints queue length with name and phone number of caller"""
        print "Queue length:", self.queue
        print "Callers in queue:", instances


# test cases
ring1 = Call("Brenda", "Complaint")
ring2 = Call("Vernon", "Compliment")
ring3 = Call("Dafna", "Comment")
ring4 = Call("Terrence", "Complaint")
ring1.display()
center1 = CallCenter()
center1.info()
center1.add("ring5", "Hugo", "Comment").info()
center1.add("ring5", "Hugo", "Comment").remove().info()

