from django.db import models
from django.utils.timezone import now


#---------------------------------用户---------------------------------------
class User(models.Model):
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length = 200)
    nickname = models.CharField(max_length = 50, default='匿名')
    email = models.EmailField()
    created_time = models.CharField(max_length=50,default=now)
    comment_num = models.PositiveIntegerField(verbose_name='评论数', default=0)   #评论数
    avatar = models.ImageField(upload_to = 'media', default="media/default.png")  #用户头像

    def __str__(self):
        return self.username

    class Meta:
        ordering = ['username']
        verbose_name = '用户'  # 指定后台显示模型名称
        verbose_name_plural = '用户管理'  # 指定后台显示模型复数名称
        db_table = "daniuapp_user"  # 数据库表名

    def comment(self):
        self.comment_num += 1
        self.save(update_fields=['comment_num'])

    def comment_del(self):
        self.comment_num -= 1
        self.save(update_fields=['comment_num'])

#---------------------------------文章评论---------------------------------------
class ArticleComment(models.Model):
    body = models.TextField()
    username = models.CharField(max_length=50)
    userimg = models.CharField(max_length=70)
    nickname = models.CharField(max_length=50, default="匿名")
    createtime = models.DateTimeField(verbose_name='创建时间', default=now)
    article = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    # 使对象在后台显示更友好
    def __str__(self):
        return self.article

    class Meta:
        ordering = ['-createtime']
        verbose_name = '评论'  # 指定后台显示模型名称
        verbose_name_plural = '评论列表'  # 指定后台显示模型复数名称
        db_table = "comment"  # 数据库表名

    list_display = ('article', 'body')

#---------------------------------博客文章标签---------------------------------------
class Tag(models.Model):
    name = models.CharField(verbose_name='标签名', max_length=64)

    # 使对象在后台显示更友好
    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = '标签名称'  # 指定后台显示模型名称
        verbose_name_plural = '标签列表'  # 指定后台显示模型复数名称
        db_table = "tag"  # 数据库表名

#---------------------------------博客文章分类---------------------------------------
class Category(models.Model):
    name = models.CharField(verbose_name='类别名称', max_length=64)

    class Meta:
        ordering = ['name']
        verbose_name = "类别名称"
        verbose_name_plural = '分类列表'
        db_table = "category"  # 数据库表名

    # 使对象在后台显示更友好
    def __str__(self):
        return self.name

#---------------------------------博客文章---------------------------------------
class Article(models.Model):
    STATUS_CHOICES = (
        ('d', '草稿'),
        ('p', '发表'),
    )
    article_id = models.CharField(verbose_name='标号', max_length=100)
    title = models.CharField(verbose_name='标题', max_length=100)
    description = models.TextField(verbose_name='文章描述', blank=True, null=True)
    content = models.TextField(verbose_name='正文', blank=True, null=True)
    status = models.CharField(verbose_name='状态', max_length=1, choices=STATUS_CHOICES, default='p')
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    category = models.ForeignKey(Category, verbose_name='分类', on_delete=models.CASCADE, blank=False, null=False)
    tags = models.ManyToManyField(Tag, verbose_name='标签集合', blank=True)

    # 使对象在后台显示更友好
    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_time']  # 按文章创建日期降序
        verbose_name = '文章'  # 指定后台显示模型名称
        verbose_name_plural = '文章列表'  # 指定后台显示模型复数名称
        db_table = 'article'  # 数据库表名
        get_latest_by = 'created_time'


#---------------------------------菜单管理---------------------------------------
class Menu(models.Model):
    STATUS_CHOICES = (
        ('d', '不显示'),
        ('p', '显示'),
    )
    menu_id = models.CharField(verbose_name='ID', max_length=100)
    title = models.CharField(verbose_name='菜单名', max_length=100)
    icon = models.CharField(verbose_name='图标字体', max_length=200)
    # url = models.URLField(verbose_name='链接地址', max_length=200)
    url = models.CharField(verbose_name='链接地址', max_length=200)
    sort_id = models.CharField(verbose_name='排序', max_length=100)
    status = models.CharField(verbose_name='显示', max_length=1, choices=STATUS_CHOICES, default='p')

    # 使对象在后台显示更友好
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['status']  # 按id降序
        verbose_name = '菜单'  # 指定后台显示模型名称
        verbose_name_plural = '菜单管理'  # 指定后台显示模型复数名称
        db_table = 'menu'  # 数据库表名
        get_latest_by = 'status'


#---------------------------------页面管理---------------------------------------
class PageManagement(models.Model):
    STATUS_CHOICES = (
        ('d', '不显示'),
        ('p', '显示'),
    )
    page_id = models.CharField(verbose_name='ID', max_length=100)
    alias = models.CharField(verbose_name='别名', max_length=100)
    title = models.CharField(verbose_name='标题', max_length=100)
    keyword = models.CharField(verbose_name='关键字', max_length=200)
    describe = models.CharField(verbose_name='描述', max_length=200)
    content = models.TextField(verbose_name='正文', blank=True, null=True)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    status = models.CharField(verbose_name='显示', max_length=1, choices=STATUS_CHOICES, default='p')

    # 使对象在后台显示更友好
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-created_time']  # 按id降序
        verbose_name = '页面'  # 指定后台显示模型名称
        verbose_name_plural = '页面管理'  # 指定后台显示模型复数名称
        db_table = 'page_management'  # 数据库表名
        get_latest_by = 'created_time'


#---------------------------------页面管理---------------------------------------
class NoticeManagement(models.Model):
    STATUS_CHOICES = (
        ('d', '不显示'),
        ('p', '显示'),
    )
    notice_id = models.CharField(verbose_name='ID', max_length=100)
    title = models.CharField(verbose_name='标题', max_length=100)
    content = models.TextField(verbose_name='正文', blank=True, null=True)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    status = models.CharField(verbose_name='显示', max_length=1, choices=STATUS_CHOICES, default='p')

    # 使对象在后台显示更友好
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-created_time']  # 按id降序
        verbose_name = '公告'  # 指定后台显示模型名称
        verbose_name_plural = '公告管理'  # 指定后台显示模型复数名称
        db_table = 'notice_management'  # 数据库表名
        get_latest_by = 'created_time'