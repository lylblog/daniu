import flask as flask
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
    # articles = serializers.serialize("json", Article.objects.all().order_by("-created_time"))
    # return HttpResponse(articles)



# #查询所有文章和状态
    if request.method == "GET":
        articles = {}
        query_art = Article.objects.all().order_by("-created_time")
        for i in query_art:
            articles[i.id] = i.title
            articles["id"] = i.id
            articles["status"] = i.status
            articles["content"] = i.content

        return JsonResponse({"status": "200", "all_titles": articles, "msg": "query articles sucess."})


def categorys(request):
    # 分类
    categorys = serializers.serialize("json", Category.objects.all())
    # return HttpResponse(categorys)
    return JsonResponse({"status": "200", "categorys": categorys, "msg": "query articles sucess."})

