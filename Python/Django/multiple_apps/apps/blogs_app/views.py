from django.shortcuts import render, HttpResponse, redirect

# /blogs fisplay "placeholder to later display all the list of blogs" via
# HttpResponse. Have this be handled by a method named 'index'.
def index(request):
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(request):
    response = "placeholder to display a NEW FORM to create a new blog"
    return HttpResponse(response)

def create(request):
    return redirect('/blogs')

def show(request, number):
    response = "placeholder to DISPLAY blog " + number
    return HttpResponse(response)

def edit(request, number):
    response = "placeholder to EDIT blog number " + number
    return HttpResponse(response)

def destroy(request, number):
    return redirect('/blogs')