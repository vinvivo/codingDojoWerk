from django.shortcuts import render, redirect
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, "ajax_post/index.html")

def notes(request):
    print request.POST
    return JsonResponse(request.POST)