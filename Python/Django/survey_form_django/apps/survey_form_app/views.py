from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "index.html")

def process(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect("/")

def result(request):
    if not 'counter' in request.session:
        request.session['counter'] = 1
    request.session['counter'] += 1
    return redirect(request, "result.html")