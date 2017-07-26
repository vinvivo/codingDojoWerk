from django.conf.urls import url
from django.conf import settings
from django.contrib.auth.views import logout
from . import views

urlpatterns = [
    url(r'^$', views.main),
    url(r'^main$', views.index),  # login page
    url(r'login$', views.log_in),  # login verifies and redirects to succes
    url(r'users$', views.register),  # register verifies and redirects to success
    url(r'success$', views.success),  # success redirects to landing page
    url(r'dashboard$', views.dashboard),  # renders dashboard page
    url(r'wish_items/(?P<product_id>\d+)$', views.wish_items), # wish list details
    url(r'add_product$', views.add_product),  # adds product to site
    url(r'remove_from_my_wishlist/(?P<product_id>\d+)$', views.remove_from_my_wishlist),
    url(r'add_to_my_wishlist/(?P<product_id>\d+)$', views.add_to_my_wishlist),  # adds item to current user's wish list
    url(r'delete/(?P<product_id>\d+)$', views.delete),
    url(r'signout$', logout, {'next_page': '/main'}, name='logout')  # logout user
]