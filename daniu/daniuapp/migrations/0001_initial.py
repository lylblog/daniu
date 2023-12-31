# Generated by Django 4.0.5 on 2022-12-25 21:36

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ArticleComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('username', models.CharField(max_length=50)),
                ('userimg', models.CharField(max_length=70)),
                ('nickname', models.CharField(default='匿名', max_length=50)),
                ('createtime', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建时间')),
                ('article', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': '评论',
                'verbose_name_plural': '评论列表',
                'db_table': 'comment',
                'ordering': ['-createtime'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='分类名称')),
                ('alias', models.CharField(max_length=100, verbose_name='别名')),
                ('created_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建时间')),
                ('sort_id', models.CharField(max_length=100, verbose_name='排序')),
                ('status', models.CharField(choices=[('d', '否'), ('p', '是')], default='p', max_length=1, verbose_name='显示')),
            ],
            options={
                'verbose_name': '分类名称',
                'verbose_name_plural': '分类列表',
                'db_table': 'category',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menu_id', models.CharField(max_length=100, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='菜单名')),
                ('icon', models.CharField(max_length=200, verbose_name='图标字体')),
                ('url', models.CharField(max_length=200, verbose_name='链接地址')),
                ('sort_id', models.CharField(max_length=100, verbose_name='排序')),
                ('status', models.CharField(choices=[('d', '不显示'), ('p', '显示')], default='p', max_length=1, verbose_name='显示')),
            ],
            options={
                'verbose_name': '菜单',
                'verbose_name_plural': '菜单管理',
                'db_table': 'menu',
                'ordering': ['status'],
                'get_latest_by': 'status',
            },
        ),
        migrations.CreateModel(
            name='NoticeManagement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notice_id', models.CharField(max_length=100, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='标题')),
                ('content', models.TextField(blank=True, null=True, verbose_name='正文')),
                ('created_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建时间')),
                ('status', models.CharField(choices=[('d', '不显示'), ('p', '显示')], default='p', max_length=1, verbose_name='显示')),
            ],
            options={
                'verbose_name': '公告',
                'verbose_name_plural': '公告管理',
                'db_table': 'notice_management',
                'ordering': ['-created_time'],
                'get_latest_by': 'created_time',
            },
        ),
        migrations.CreateModel(
            name='PageManagement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_id', models.CharField(max_length=100, verbose_name='ID')),
                ('alias', models.CharField(max_length=100, verbose_name='别名')),
                ('title', models.CharField(max_length=100, verbose_name='标题')),
                ('keyword', models.CharField(max_length=200, verbose_name='关键字')),
                ('describe', models.CharField(max_length=200, verbose_name='描述')),
                ('content', models.TextField(blank=True, null=True, verbose_name='正文')),
                ('created_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建时间')),
                ('status', models.CharField(choices=[('d', '不显示'), ('p', '显示')], default='p', max_length=1, verbose_name='显示')),
            ],
            options={
                'verbose_name': '页面',
                'verbose_name_plural': '页面管理',
                'db_table': 'page_management',
                'ordering': ['-created_time'],
                'get_latest_by': 'created_time',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='标签名')),
            ],
            options={
                'verbose_name': '标签名称',
                'verbose_name_plural': '标签列表',
                'db_table': 'tag',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=200)),
                ('nickname', models.CharField(default='匿名', max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('created_time', models.CharField(default=django.utils.timezone.now, max_length=50)),
                ('comment_num', models.PositiveIntegerField(default=0, verbose_name='评论数')),
                ('avatar', models.ImageField(default='media/default.png', upload_to='media')),
            ],
            options={
                'verbose_name': '用户',
                'verbose_name_plural': '用户管理',
                'db_table': 'daniuapp_user',
                'ordering': ['username'],
            },
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_id', models.CharField(max_length=100, verbose_name='标号')),
                ('title', models.CharField(max_length=100, verbose_name='标题')),
                ('description', models.TextField(blank=True, null=True, verbose_name='文章描述')),
                ('content', models.TextField(blank=True, null=True, verbose_name='正文')),
                ('status', models.CharField(choices=[('d', '草稿'), ('p', '发表')], default='p', max_length=1, verbose_name='状态')),
                ('created_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建时间')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='daniuapp.category', verbose_name='分类')),
                ('tags', models.ManyToManyField(blank=True, to='daniuapp.tag', verbose_name='标签集合')),
            ],
            options={
                'verbose_name': '文章',
                'verbose_name_plural': '文章列表',
                'db_table': 'article',
                'ordering': ['-created_time'],
                'get_latest_by': 'created_time',
            },
        ),
    ]
