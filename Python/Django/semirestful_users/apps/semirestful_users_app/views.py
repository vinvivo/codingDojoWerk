from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.core.urlresolvers import reverse
from time import gmtime, strftime
from datetime import datetime
# Create your views here.
def index(request):
    context = {
        "user_list": User.objects.all()
    }
    return render(request, "semirestful_users_app/index.html", context)

def show(request, id):
    context = {
        "user_list": User.objects.get(id = id)
    }
    return render(request, "semirestful_users_app/show.html", context)

def new(request):
    return render(request, "semirestful_users_app/new.html")

def create(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/users/new')
    else:
        q = User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])
        userid = q.id
        return redirect('/users/' + str(userid))

def edit(request, id):
    context = {
        "user_list": User.objects.get(id = id)
    }
    return render(request, "semirestful_users_app/edit.html", context)

def update(request, id):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.errors(request, error, extra_tags=tag)
        return redirect('/users/' + id + '/edit')
    else:
        q = User.objects.get(id = id)
        q.first_name = request.POST['first_name']
        q.last_name = request.POST['last_name']
        q.email = request.POST['email']
        q.save()
        return redirect('/users/' + id)
        
def destroy(request, id):
    q = User.objects.get(id = id)
    q.delete()
    return redirect('/users')