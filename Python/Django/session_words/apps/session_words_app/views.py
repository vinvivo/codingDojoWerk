from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
from datetime import datetime

def index(request):
    return render(request, "session_words_app/index.html")

def add_word(request):
    if 'word_list' not in request.session:  # create empty list
        request.session['word_list'] = []
    time = strftime("%T %p, %b %d, %Y")   # create timestamp of post
    if 'bigtext' in request.POST:
        font_size = request.POST['bigtext']
    else:
        font_size = ""
    word_input = {
                  "word": request.POST['new_word'],
                  "color": request.POST['colorpick'],
                  "fontsize": font_size
                  "timestamp": time,
                 }
    request.session['word_list'].append(word_input)
    request.session.modified = True
    return redirect("/")

def clear(request):
    request.session['word_list'] = []
    return redirect("/")