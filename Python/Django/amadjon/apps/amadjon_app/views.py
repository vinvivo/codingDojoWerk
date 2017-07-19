from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'amadjon_app/index.html')

def buy(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    if 'total' not in request.session:
        request.session['total'] = 0
    if request.method == 'POST':
        if 'orders_list' not in request.session:
            request.session['orders_list'] = []
        if 'shirt' in request.POST:
            product_name = "Dojo T-shirt"
            price = 20
        elif 'sweater' in request.POST:
            product_name = "Dojo Sweater"
            price = 30
        elif 'cup' in request.POST:
            product_name = "Dojo Cup"
            price = 5
        elif 'book' in request.POST:
            product_name = "Algorithm Book"
            price = 50
        elif 'spinner' in request.POST:
            product_name = "Dojo Fidget Spinner"
            price = 10
        elif 'tuition' in request.POST:
            product_name = "Dojo Tuition Gift Card"
            price = 13500
        else:
            return HttpResponse("Error in pricing.")
        order_request = {
                         "product_name": product_name,
                         "qty": request.POST['qty'],
                         "price": price,
                         "subtotal": int(request.POST['qty']) * price
                        }
        request.session['current_order'] = order_request
        request.session['orders_list'].append(order_request)
        request.session['counter'] += int(request.POST['qty'])
        request.session['total'] += (int(request.POST['qty']) * price)
        request.session.modified = True
        print product_name
        print order_request['subtotal']
        print request.session['total']
        print request.session['counter']
        return redirect('/shoppingcart')
    print request.session['total']
    print request.session['counter']
    return render(request, 'amadjon_app/shoppingcart.html')

def clear(request):
    request.session['orders_list'] = []
    request.session['counter'] = 0
    request.session['total'] = 0
    print request.session['total']
    print request.session['counter']
    return render(request, 'amadjon_app/shoppingcartdeleted.html')