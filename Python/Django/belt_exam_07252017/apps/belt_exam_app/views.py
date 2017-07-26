from django.shortcuts import render, HttpResponse, redirect
from .models import User, Product
from django.contrib import messages
import bcrypt

def main(request):
    ''' Redirects localhost:8000 to localhost:8000/main '''
    return redirect('/main')

def index(request):
    ''' Renders login-reg at /main URL '''
    return render(request, 'belt_exam_app/index.html')

def register(request):
    errors = User.objects.user_validator(request.POST)
    if errors:
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/main')
    else:
        q = User.objects.filter(username=request.POST['username'])
        if q.count() > 0:
            messages.error(request, "A user account with that username already exists", extra_tags="username")
            return redirect('/')
        else:
            hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            new_user = User.objects.create(name = request.POST['name'], username = request.POST['username'], password = hashed_pw, date_hired = request.POST['date_hired'])
            request.session['session_user_id'] = new_user.id
            request.session['username'] = new_user.username
            request.session['name'] = new_user.name
            return redirect('/success')
    return redirect('/main')

def log_in(request):
    ''' Log in user after passing validations '''
    found_users = User.objects.filter(username=request.POST['username'])
    if found_users.count() > 0:
        found_user = found_users.first()
        if bcrypt.checkpw(request.POST['password'].encode(), found_user.password.encode()) is True:
            request.session['session_user_id'] = found_user.id
            request.session['username'] = found_user.username
            request.session['name'] = found_user.name
            return redirect('/success')
        else:
            messages.error(request, "Login Failed", extra_tags="username")
            return redirect('/main')
    else:
        messages.error(request, "Invalid login", extra_tags="username")
        return redirect('/main')

def success(request):
    ''' Redirects user to /dashboard if user passes login() or register() '''
    return redirect('/dashboard')

def dashboard(request):
    ''' Renders /dashboard URL '''
    context = {
        "my_wish_list": Product.objects.filter(wisher__id = request.session['session_user_id'])|Product.objects.filter(users__id = request.session['session_user_id']).exclude(wisher__id = request.session['session_user_id']),
        "all_products": Product.objects.exclude(wisher__id = request.session['session_user_id']).exclude(users__id = request.session['session_user_id'])
    }
    return render(request, 'belt_exam_app/dashboard.html', context)

def add_product(request):
    if request.method == "POST":
        errors = Product.objects.product_validator(request.POST)
        if errors:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return redirect('/add_product')
        else:
            q = Product.objects.create(product_name = request.POST['product_name'], wisher = User.objects.get(id = request.session['session_user_id']))
            return redirect('/dashboard')
    else:
        return render(request, 'belt_exam_app/create.html')

def add_to_my_wishlist(request, product_id):
    if request.method == "POST":
        # get the user object that matches the current session session_user_id
        user_query = User.objects.get(id = request.session['session_user_id'])
        user_query.save()
        product_query = Product.objects.get(id = product_id)
        product_query.save()
        # {{ parent_query }}.{{ related_name_to_access_child_table}}.add( {{ child_query }} )
        user_query.products.add(product_query)
        print "Added product #", product_query.product_name, "to user #", request.session['session_user_id']
        return redirect('/dashboard')
    else:
        return redirect('/dashboard')

def remove_from_my_wishlist(request, product_id):
    if request.method == "POST":
        # get the user object that matches the current session session_user_id
        user_query = User.objects.get(id = request.session['session_user_id'])
        user_query.save()
        product_query = Product.objects.get(id = product_id)
        product_query.save()
        # {{ parent_query }}.{{ related_name_to_access_child_table}}.add( {{ child_query }} )
        user_query.products.remove(product_query)
        print "Removed product <", product_query.product_name, "> to user <", request.session['session_user_id'], ">"
        return redirect('/dashboard')
    else:
        return redirect('/dashboard')

def delete(request, product_id):
    product_query = Product.objects.get(id = product_id)
    print "Deleted product:", product_query.product_name
    product_query.delete()
    return redirect('/dashboard')

def wish_items(request, product_id):
    users_with_item = User.objects.filter(wishers__id = product_id)|User.objects.filter(products__id = product_id)
    context = {
        "my_wish_items": User.objects.filter(wishers__id = product_id),  # to list all users with this item on their wishlist (inclusive)
        "other_wish_items": User.objects.filter(products__id = product_id),
        "product_info": Product.objects.get(id = product_id),
    }
    return render(request, 'belt_exam_app/wish_items.html', context)