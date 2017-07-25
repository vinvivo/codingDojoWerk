from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.redirect_index),
    url(r'^myposts$', views.index),
    url(r'notes$', views.notes)
]