from django.shortcuts import render, HttpResponse, redirect

# /blogs fisplay "placeholder to later display all the list of blogs" via
# HttpResponse. Have this be handled by a method named 'index'.
def index(request):
    diction = {"response": "placeholder to later display all the list of blogs"}
    return render(request, "blogs_app/index.html", diction)

def new(request):
    response = "placeholder to display a NEW FORM to create a new blog"
    return HttpResponse(response)

def create(request):
    if request.method == "POST":    # request.method returns the method/HTTP verb associated with the request
        print "*"*50
        print request.POST
        print request.POST['name']
        print request.POST['desc']
        request.session['name'] = "test"
        print "*"*50
        return redirect('/')
    else:
        return redirect('/')

def show(request, number):
    response = "placeholder to DISPLAY blog " + number
    return HttpResponse(response)

def edit(request, number):
    response = "placeholder to EDIT blog number " + number
    return HttpResponse(response)

def destroy(request, number):
    return redirect('/blogs')