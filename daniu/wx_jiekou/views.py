from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response


from .serializers import CategorySerializer, ArticleSerializer
from daniuapp.models import Category, Article


####文章分类序列化####
class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()  # 指定查询结果集
    serializer_class = ArticleSerializer  # 指定序列化器
    @action(detail=True, methods=['Get'])
    def vote(self, request, pk=None):
        queryset = Article.objects.filter(category=pk)
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()  # 指定查询结果集
    serializer_class = CategorySerializer  # 指定序列化器
####文章分类序列化####
