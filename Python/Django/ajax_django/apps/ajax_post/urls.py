from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'notes$', views.notes)
]