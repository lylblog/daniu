# 使用drf的视图集就不需要编写路由，通过DefaultRouter的register方法注册就可以了
from os import path
from django.urls import include, re_path
from rest_framework.routers import DefaultRouter
from . import views
from .views import ArticleView

router = DefaultRouter()
# router.register('student', views.StudentView)
# router.register('course', views.CourseView)
# router.register('grade', views.GradeView)
router.register('category', views.CategoryView)
router.register('article', views.ArticleView)





urlpatterns = [
    re_path('', include(router.urls)),
]