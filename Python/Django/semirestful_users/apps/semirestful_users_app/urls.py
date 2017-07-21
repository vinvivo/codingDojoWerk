from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'users$', views.index, name="my_index"),
    url(r'new$', views.new, name="my_new"),
    url(r'create$', views.create, name="my_create"),
    url(r'(?P<id>\d+)$', views.show, name="my_show"),
    url(r'(?P<id>\d+)/edit$', views.edit, name="my_edit"),
    url(r'(?P<id>\d+)/update$', views.update),
    url(r'(?P<id>\d+)/edit$', views.update),
    url(r'(?P<id>\d+)/destroy$', views.destroy, name="my_delete")
    # url(r'show$', views.show, name="my_show"),
    # url(r'edit$', views.edit, name="my_edit"),
    # url(r'delete$', views.destroy, name="my_delete")
]