from rest_framework import viewsets

from .models import Course, Grade, Student
# from .serializers import CourseSerializer, GradeSerializer, StudentSerializer, CategorySerializer
from .serializers import CategorySerializer, ArticleSerializer
from daniuapp.models import Category, Article


####文章分类序列化####
class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()  # 指定查询结果集
    serializer_class = ArticleSerializer  # 指定序列化器
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()  # 指定查询结果集
    serializer_class = CategorySerializer  # 指定序列化器
####文章分类序列化####

#
# class StudentView(viewsets.ModelViewSet):
#     queryset = Student.objects.all()  # 指定查询结果集
#     serializer_class = StudentSerializer  # 指定序列化器
#
#
# class GradeView(viewsets.ModelViewSet):
#     queryset = Grade.objects.all()
#     serializer_class = GradeSerializer
#
#
# class CourseView(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer