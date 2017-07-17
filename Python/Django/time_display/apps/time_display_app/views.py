from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

def index(request):
    context = {
        "time": strftime("%B %d, %Y %I:%M %p", gmtime())
    }
    return render(request, 'time_display_app/index.html', context)

def test(request):
    response = "This method works."
    return HttpResponse(response)