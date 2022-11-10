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
from django.conf import settings
from django.urls import re_path
from django.views.static import serve
from . import views

urlpatterns = [

    # 首页路由
    re_path('^$', views.index, name='index'),
    # 详情页 一
    re_path('^info/(?P<id>\d+)\.html$', views.info, name='info'),
    # 例如：http://127.0.0.1:8000/info/1.html

    # 详情页 二
    re_path('^info_new/page=(?P<id>\d+)\.html$', views.info_new, name='info_new'),
    # 例如：http://127.0.0.1:8000/info_new/page=1.html

    # 心得杂坛
    re_path('^info/xinde.html', views.xinde, name='xinde'),

    # 图片资源
    re_path("templates/data/media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),

    # 密码保护：全套学习视频,师夷长技以自强
    re_path('^other.html', views.other, name='other'),
    re_path('^postpassword.html', views.postpassword, name='postpassword'),

    # 邮件客服
    re_path('^ncnkefu.html', views.ncnkefu, name='ncnkefu'),
    re_path('^ncnkefu_res.html', views.ncnkefu_res, name='ncnkefu_res'),

    re_path('^left_base.html', views.left_base, name='left_base'),
]
