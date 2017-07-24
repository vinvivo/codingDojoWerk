from django.shortcuts import render, HttpResponse, redirect
from .models import User, Quote
from django.contrib import messages
import bcrypt
# Create your views here.
def main(request):
    ''' Redirects localhost:8000 to localhost:8000/main '''
    return redirect('/main')

def index(request):
    ''' Renders /main URL '''
    return render(request, 'quotes_app/index.html')  # adjust filepath

def quotes(request):
    ''' Renders /quotes URL '''
    context = {
        "quote_list": Quote.objects.all(),
        "favorites_list": Quote.objects.filter(users = request.session['user_id']),
    }
    return render(request, 'quotes_app/quotes.html', context)

def success(request):
    ''' Redirects user to /quotes if user passes login() or register() '''
    # messages.success(request, "You successfully registered (or logged in)")
    # return render(request, 'quotes_app/success.html')
    return redirect('/quotes')

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
            messages.error(request, "A user account with that email already \
            exists", extra_tags="email")
            return redirect('/')
        else:
            hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            q = User.objects.create(name = request.POST['name'], alias = request.POST['alias'], email=request.POST['email'], password=hashed_pw)
            request.session['user_id'] = q.id
            request.session['alias'] = q.alias
            return redirect('/success')
    return redirect('/')

def log_in(request):
    # check user for that email
    # then check password
    found_users = User.objects.filter(email=request.POST['email'])
    if found_users.count() > 0:
        # check password
        found_user = found_users.first()
        if bcrypt.checkpw(request.POST['password'].encode(), found_user.password.encode()) is True:
            # log in user
            request.session['user_id'] = found_user.id  # user_id from email query
            request.session['alias'] = found_user.alias
            return redirect('/success')
        else:
            messages.error(request, "Login Failed", extra_tags="email")
            return redirect('/')
    else:
        messages.error(request, "User not found", extra_tags="email")
        return redirect('/')

def post(request):
    errors = Quote.objects.basic_validator(request.POST)
    if errors:
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/quotes')
    else:
        q = Quote.objects.create(author = request.POST['author'], quotation = request.POST['quotation'], poster = User.objects.get(id = request.session['user_id']))
        return redirect('/quotes')

def user(request, id):
    context = {
        "quote_list": Quote.objects.filter(poster__id = id),
        "poster_alias": User.objects.get(id = id).alias,
        "quote_count": Quote.objects.filter(poster_id = id).count()
    }
    return render(request, 'quotes_app/users.html', context)

def favorite(request, id):
    if request.method == "POST":
        user_query = User.objects.get(id=request.session['user_id'])
        user_query.save()
        quote_query = Quote.objects.get(id=id)
        quote_query.save()
        quote_query.users.add(user_query)  # child_query.related_name.add(parent_query)
        print "Added user #", request.session['user_id'], "to quote #", quote_query
        return redirect('/quotes')
    else:
        return redirect('/quotes')