from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime
from datetime import datetime
from random import random, randint

# Create your views here.
def index(request):
    return render(request, 'ninja_gold_app/index.html')

def process(request):
    if 'total_gold' not in request.session:
        request.session['total_gold'] = 0
    if request.method == 'POST':
        if 'activity_list' not in request.session:
            request.session['activity_list'] = []
        if 'farm' in request.POST:
            location = "farm"
            gold = randint(10,20)
            time = strftime("%T %p, %b %d, %Y")
            fate = "Earned"
        elif 'cave' in request.POST:
            location = "cave"
            gold = randint(5,10)
            time = strftime("%T %p, %b %d, %Y")
            fate = "Earned"
        elif 'house' in request.POST:
            location = "house"
            gold = randint(2,5)
            time = strftime("%T %p, %b %d, %Y")
            fate = "Earned"
        elif 'casino' in request.POST:
            location = "casino"
            gold = randint(0,50)
            time = strftime("%T %p, %b %d, %Y")
            chance = randint(0,1)
            if chance == 1:
                fate = "Earned"
            else:
                fate = "Lost"
        else:
            return HttpResponse("Error in request.POST if statement")
        activity = {
                    "location": location,
                    "gold": gold,
                    "time": time,
                    "fate": fate
        }
        request.session['activity_list'].append(activity)
        request.session['total_gold'] += gold
        request.session.modified = True
        return redirect('/')
    return render(request, '/')


