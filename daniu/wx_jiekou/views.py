from rest_framework import viewsets

from .models import Course, Grade, Student
from .serializers import CourseSerializer, GradeSerializer, StudentSerializer


class StudentView(viewsets.ModelViewSet):
    queryset = Student.objects.all()  # 指定查询结果集
    serializer_class = StudentSerializer  # 指定序列化器


class GradeView(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer