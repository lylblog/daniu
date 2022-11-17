from django.db import models

# Create your models here.

class Grade(models.Model):  # 班级
    name = models.CharField(max_length=16, null=False, unique=True)

    class Meta:
        db_table = 'grade'
        ordering = ['id']


class Course(models.Model):  # 课程
    name = models.CharField(max_length=32, unique=True, null=False)

    class Meta:
        db_table = 'course'
        ordering = ['id']


class Student(models.Model):  # 学生
    name = models.CharField(max_length=16, null=False)
    age = models.IntegerField(null=True)
    gender = models.BooleanField(null=False, default=0)
    g = models.ForeignKey(Grade, on_delete=models.CASCADE)
    c = models.ManyToManyField(Course)

    class Meta:
        db_table = 'student'
        ordering = ['id']