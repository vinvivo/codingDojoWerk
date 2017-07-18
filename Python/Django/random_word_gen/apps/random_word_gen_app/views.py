from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    if not 'counter' in request.session:
        request.session['counter'] = 1
    request.session['counter'] += 1
    context = {
        "word":get_random_string(length=14)
    }
    return render(request, "random_word_gen_app/index.html", context)

def reset(request):
    request.session['counter'] = 0
    return redirect("/")
