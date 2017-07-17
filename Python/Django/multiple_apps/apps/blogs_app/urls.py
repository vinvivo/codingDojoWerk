from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'new$', views.new),
    url(r'create$', views.create),
    url(r'(?P<number>\d+)$', views.show),   # (?P<number> -- () wraps a group of regex arguments, P<number> creates a variable number that can be passed to the views function, \d searches for digits, + enables multi-digit search
    url(r'(?P<number>\d+)/edit$', views.edit),
    url(r'(?P<number>\d+)/delete$', views.destroy)
]