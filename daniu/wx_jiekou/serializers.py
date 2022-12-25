from rest_framework import serializers


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
        # fields = ['name']
        fields = '__all__'

####文章分类序列化####
