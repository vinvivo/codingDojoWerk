from django.shortcuts import render, HttpResponse

def index(request):
    response = "Placeholder to display ALL THE SURVEYS created."
    return HttpResponse(response)

def new(request):
    response = "Placeholder for users to add a NEW SURVEY."
    return HttpResponse(response)
