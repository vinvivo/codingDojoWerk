from django.shortcuts import render, HttpResponse

def index(request):
    response = "Placeholder to later display all the list of USERS"
    return HttpResponse(response)

def register(request):
    response = "Placeholder for users to create a NEW USER record"
    return HttpResponse(response)

def login(request):
    response = "Placeholder for users to LOGIN"
    return HttpResponse(response)
