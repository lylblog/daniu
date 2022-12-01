"""daniu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.template.defaulttags import url
from django.urls import path, include, re_path


urlpatterns = [
    # admin路由
    path('admin/', admin.site.urls),
    # 子应用路由配置
    re_path('^', include(("daniuapp.urls", '^'), namespace="daniuapp")),
    # 引入富文本
    path('summernote/', include('django_summernote.urls')),
    # 评论
    path(r'comments/', include('django_comments.urls')),
    # API
    re_path('api/', include("wx_jiekou.urls")),
]