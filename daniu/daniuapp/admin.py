from django.contrib import admin
from .models import Article, User, Category, Tag, ArticleComment, Menu, PageManagement, NoticeManagement
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.

admin.site.site_title = "xxx博客"
admin.site.site_header = "xxx博客管理系统"
admin.site.index_title = "xxx博客"
# 定义后台管理类
class PostAdmin(SummernoteModelAdmin):
    # 给content字段添加富文本
    summernote_fields = ('content')
    # 定义显示字段
    list_display = [
        'id',
        'article_id',
        'title',
        'created_time'
    ]
    # 定义点击进入字段
    list_display_links = [
        'title',
    ]
    # 定义每页显示数据条数
    list_per_page = 10
    # 搜索框
    search_fields = [
        'title'
    ]
    # 过滤器
    list_filter = [
        'created_time'
    ]

# class ArticleAdmin(admin.ModelAdmin):
class CommentAdmin(admin.ModelAdmin):
    # 定义显示字段
    list_display = [
        'username',
        'body',
        'title'
    ]
    # 搜索框
    search_fields = [
        'title'
    ]

class Category_newAdmin(SummernoteModelAdmin):
    # 给content字段添加富文本
    summernote_fields = ('content')
    # 定义显示字段
    list_display = [
        'id',
        'name',
        'alias',
        'created_time',
        'sort_id',
        'status'
    ]
    # 定义点击进入字段
    list_display_links = [
        'name',
    ]
    # 定义每页显示数据条数
    list_per_page = 10
    # 搜索框
    search_fields = [
        'title'
    ]
    # 过滤器
    list_filter = [
        'status'
    ]
class MenuAdmin(SummernoteModelAdmin):
    # 给content字段添加富文本
    summernote_fields = ('content')
    # 定义显示字段
    list_display = [
        'menu_id',
        'title',
        'icon',
        'url',
        'sort_id',
        'status'
    ]
    # 定义点击进入字段
    list_display_links = [
        'menu_id',
        'title',
    ]
    # 定义每页显示数据条数
    list_per_page = 10
    # 搜索框
    search_fields = [
        'title'
    ]
    # 过滤器
    list_filter = [
        'status'
    ]

class PageManagementAdmin(SummernoteModelAdmin):
    # 给content字段添加富文本
    summernote_fields = ('content')
    # 定义显示字段
    list_display = [
        'page_id',
        'alias',
        'title',
        'keyword',
        'describe',
        'created_time',
        'status'
    ]
    # 定义点击进入字段
    list_display_links = [
        'page_id',
        'alias',
        'title',
    ]
    # 定义每页显示数据条数
    list_per_page = 10
    # 搜索框
    search_fields = [
        'title'
    ]
    # 过滤器
    list_filter = [
        'status'
    ]

class NoticeManagementAdmin(SummernoteModelAdmin):
    # 给content字段添加富文本
    summernote_fields = ('content')
    # 定义显示字段
    list_display = [
        'notice_id',
        'title',
        'created_time',
        'status'
    ]
    # 定义点击进入字段
    list_display_links = [
        'notice_id',
        'title',
    ]
    # 定义每页显示数据条数
    list_per_page = 10
    # 搜索框
    search_fields = [
        'title'
    ]
    # 过滤器
    list_filter = [
        'status'
    ]


admin.site.register(NoticeManagement, NoticeManagementAdmin)
admin.site.register(PageManagement, PageManagementAdmin)
admin.site.register(Menu, MenuAdmin)
admin.site.register(Article, PostAdmin)
admin.site.register(Category, Category_newAdmin)
admin.site.register(Tag)
admin.site.register(User)
admin.site.register(ArticleComment, CommentAdmin)
