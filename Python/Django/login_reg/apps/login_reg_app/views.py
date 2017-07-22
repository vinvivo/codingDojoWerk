from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages
import bcrypt
# Create your views here.
def index(request):
    return render(request, 'login_reg_app/index.html')

def success(request):
    messages.success(request, "You successfully registered (or logged in)")
    return render(request, 'login_reg_app/success.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        # query for email
        q = User.objects.filter(email=request.POST['email'])
        if q.count() > 0:
            # check for existing user
            messages.error(request, "A user account with that email already exists", extra_tags="email")
            return redirect('/')
        else:
            hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            q = User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email=request.POST['email'], password=hashed_pw)
            request.session['user_id'] = q.id
            request.session['user_name'] = q.first_name + " " + q.last_name
            return redirect('/success')
    return redirect('/')

def login(request):
    # check user for that email
    # then check password
    found_users = User.objects.filter(email=request.POST['email'])
    if found_users.count() > 0:
        # check password
        found_user = found_users.first()
        if bcrypt.checkpw(request.POST['password'].encode(), found_user.password.encode()) is True:
            # log in user
            request.session['user_id'] = found_user.id
            request.session['user_name'] = found_user.first_name + " " + found_user.last_name
            return redirect('/success')
        else:
            messages.error(request, "Login Failed", extra_tags="email")
            return redirect('/')
    else:
        messages.error(request, "Login Failed", extra_tags="email")
        return redirect('/')