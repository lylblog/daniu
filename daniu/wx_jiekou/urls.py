from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'article', views.article, name='article'),
    re_path(r'categorys', views.categorys, name='categorys'),
]