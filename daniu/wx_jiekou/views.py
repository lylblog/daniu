from django.http.response import HttpResponse
import json
from django.core import serializers
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import render
from .models import test
from daniuapp.models import Article, Category


# Create your views here.
# 获取模板列表


def article(request):
    result = serializers.serialize("json", test.objects.all().order_by("-id")[:])
    # return HttpResponse(json.dumps(result, ensure_ascii=False), content_type="application/json", charset='utf-8')
    # return HttpResponse(result)

    # 文章数据
    articles = serializers.serialize("json", Article.objects.all().order_by("-created_time"))
    return HttpResponse(articles)


def categorys(request):
    # 分类
    categorys = serializers.serialize("json", Category.objects.all())

    return HttpResponse(categorys)

def info(request, id):
    """
    详情页 需要文章id
    :param request:
    :return:
    """
    article = serializers.serialize("json", Article.objects.get(id=id))
    return HttpResponse(article)



    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = serializers.serialize("json", Article.objects.filter(category_id='3')[:3])
    # Windows纯净原版分类下文章
    Windows_categorys = serializers.serialize("json", Article.objects.filter(category_id='4')[:3])
    # Adobe Ps Ai Pr系列
    Adobe_categorys = serializers.serialize("json", Article.objects.filter(category_id='5')[:3])
    # CAD Revit Maya 3D系列
    CAD_categorys = serializers.serialize("json", Article.objects.filter(category_id='7')[:3])
    # 心得杂坛
    Xindezatan_categorys = serializers.serialize("json", Article.objects.filter(category_id='10')[:3])

