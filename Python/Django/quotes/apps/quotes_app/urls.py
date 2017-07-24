from django.conf.urls import url
from django.conf import settings
from django.contrib.auth.views import logout
from . import views

urlpatterns = [
    url(r'^$', views.main),
    url(r'^main$', views.index),
    url(r'users$', views.register),
    url(r'success$', views.success),
    url(r'quotes$', views.quotes),
    url(r'login$', views.log_in),
    url(r'users/(?P<id>\d+)$', views.user),
    url(r'post$', views.post),
    url(r'favorite/(?P<id>\d+)$', views.favorite),
    url(r'signout$', logout, {'next_page': '/main'}, name='logout')
]