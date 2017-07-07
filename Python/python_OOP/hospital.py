""" Assignment: OOP | Hospital
    07 July 2017
    Vinney

    You're going to build a hospital with patients in it! Create a hospital
    class.

    Before looking at the requirements below, think about the potential
    characteristics of each patient and hospital. How would you design each?

    Patient:
        Attributes:
        - Id: an id number
        - Name
        - Allergies
        - Bed number: should be none by default
    Hospital
        Attributes:
        - Patients: an empty array
        - Name: hospital name
        - Capacity: an integer indicating the maximum number of patients the
          hospital can hold.
    Methods:
        - Admit: add a patient to the list of patients. Assign the patient a
          bed number. If the length of the list is >= the capacity do not admit
          the patient. Return a message either confirming that admission is
          complete or saying the hospital is full.
        - Discharge: look up and remove a patient from the list of patients.
          Change bed number for that patient back to none.

    This is a challenging assignment. Ask yourself what input each method requires and what output you will need.
"""
import uuid         # for creating unique ID numbers


class Hospital(object):

    def __init__(self):
        """__init__ creates a callback for instances list and counts queue"""
        self.patients = {}  # keeps track of filled beds; using dict for callback
        self.hName = "inVivo Hospital"
        self.capacity = 5  # low for easy testing

    def admit(self, pName, allergies, bed="none"):
        """adds new patient with specified arguments"""
        self.uuid = uuid.uuid4()  # generates unique ID
        self.pName = pName
        self.allergies = allergies
        self.bed = bed
        if (len(self.patients) + 1) <= self.capacity:  # checks is there's room to add a patient
            for i in range(1, self.capacity + 1):  # checks for occupied beds (i.e., items in self.patients)
                if i not in self.patients:  # if there are vacant beds (i.e., no key value present)
                    self.bed = i  # set bed number = i, i.e., assign patient to bed number i
                    self.patients[self.bed] = self.pName  # create new item in self.patients dict
                    print "{} has been admitted to {} and is assigned to bed number {}.".format(self.pName, self.hName, self.bed)
                    return self
        elif (len(self.patients) + 1) >= self.capacity:
            print "{}, we regret to inform you the hospital is at capacity and cannot accept new patients at this time. Let me connect you with the nearest facility that can see you...".format(self.pName)
            return self

    def discharge(self, search_Name):
        # find/remove specified patient (via pName) from self.patients & reset bed
        for bed, name in self.patients.items():
            if name == search_Name:
                print "{} was discharged.".format(search_Name)
                del self.patients[bed]
                return self


# test cases
test1 = Hospital()
test1.admit(
    "Vinney", ["cats", "grass"]
).admit(
    "Mary", "none"
).admit(
    "Imron", "none"
).admit(
    "Ethan", "none"
).admit(
    "James", "none"
).admit(
    "Robert", "none"
).discharge(
    "Imron"
).admit(
    "Robert", "none"
)
