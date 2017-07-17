from django.conf.urls import urls   # this gives us access to the function 'url'
from . import views     # this explicitly imports views.py from the current folder

urlpatterns = [
    url(r'^$', views.index)     # uses the url method similar to @app.route method in flask.
                                # r'^$' looks for an empty string. If there's a match, it runs
                                # the views.index method--which is the function 'index()' in the
                                # views.py file
]