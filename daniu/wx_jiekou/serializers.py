from rest_framework import serializers

from .models import Grade, Course, Student
from daniuapp.models import Category, Article



####文章分类序列化####

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        # 指定序列化器对应的模型
        model = Article
        # 指定需要序列化的字段，‘__all__’表示所有字段
        fields = '__all__'
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        # 指定序列化器对应的模型
        model = Category
        # 指定需要序列化的字段，‘__all__’表示所有字段
        fields = ['name']
####文章分类序列化####
#
# class GradeSerializer(serializers.ModelSerializer):
#     class Meta:
#         # 指定序列化器对应的模型
#         model = Grade
#         # 指定需要序列化的字段，‘__all__’表示所有字段
#         fields = ['name']
#
#
# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Course
#         fields = ['name']
#
#
# class StudentSerializer(serializers.ModelSerializer):
#     # 自定义序列化和反序列化字段校验条件，默认使用建表约束校验；也可以使用extra_kwargs
#     # SlugRelatedField指定关联对象的指定字段，关联字段默认为关联对象id
#     c = serializers.SlugRelatedField(slug_field='name', many=True, queryset=Course.objects.all())
#     g = serializers.SlugRelatedField(slug_field='name', queryset=Grade.objects.all())
#
#     class Meta:
#         model = Student
#         # 自定义校验
#         extra_kwargs = {'age': {'max_value': 30, 'min_value': 0}}
#         fields = '__all__'
#
#     # 返回数据预处理
#     def to_representation(self, instance):
#         data = super().to_representation(instance)
#         if data['gender'] == 0:
#             data['gender'] = '女'
#         else:
#             data['gender'] = '男'
#         return data