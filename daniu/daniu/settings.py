"""
Django settings for daniu project.

Generated by 'django-admin startproject' using Django 4.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os.path
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-^f2=dd&)8!_eg7*frn5sl)mv_0i#gy*4uj=t)6r#r*8lhp6n(('

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# DEBUG = False

# ALLOWED_HOSTS = ['aws.liuhu.asia','13.114.249.162','172.31.4.130','localhost','0.0.0.0:8000','127.0.0.1']
ALLOWED_HOSTS = ['*']  #允许所有人访问
CSRF_TRUSTED_ORIGINS = ['https://23165e1b11.zicp.fun']  #允许评论，解决评论“CSRF40”3错误


# Application definition

INSTALLED_APPS = [
    "simpleui",   #添加内容，一定要加在admin前
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',    # api
    'daniuapp',  # app1
    'wx_jiekou',  # app2
    'django.contrib.sites',  # 评论
    'django_comments',  # 评论
    'django_summernote'  # 后台富文本
]
SITE_ID = 1  # 评论

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'daniu.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.media',
            ],
        },
    },
]


WSGI_APPLICATION = 'daniu.wsgi.application'

# Mail配置
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.163.com'
EMAIL_PORT = 25
EMAIL_HOST_USER = 'l2214888601@163.com' # 发送邮件的邮箱
EMAIL_HOST_PASSWORD = 'QOPGRFMUVHKKFUBA' # 在邮箱中设置的客户端授权密码   邮箱163的IMAP/SMTP/POP3服务客户端授权密码：QOPGRFMUVHKKFUBA
DEFAULT_FROM_EMAIL = 'l2214888601@163.com'
EMAIL_FROM = 'python<l2214888601@163.com>'  # 收件人看到的发件人# 需要和邮箱号码一致

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

# 链接数据库
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'django',
#         'USER': 'django',
#         'PASSWORD': '1qaz2wsx',
#         'HOST': '13.114.249.162',
#         'PORT': '3306',
#     }
# }

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# 定义静态文件所在目录
STATICFILES_DIRS = [
    BASE_DIR / "templates/static",
]
# 上线前收集全部静态资源至templates/static，收集命令：python manage.py collectstatic
# STATIC_ROOT = os.path.join(BASE_DIR, "templates/static")

# # 定义上传文件路径
MEDIA_URL = "/templates/data/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, 'templates/data/media')



# 引入富文本 Django 3.X用户还需增加如下配置
X_FRAME_OPTIONS = 'SAMEORIGIN'

# 引入富文本配置
SUMMERNOTE_CONFIG = {
    # Using SummernoteWidget - iframe mode
    'iframe': True,  # or set False to use SummernoteInplaceWidget - no iframe mode

    # Using Summernote Air-mode
    'airMode': False,

    # Use native HTML tags (`<b>`, `<i>`, ...) instead of style attributes
    'styleWithSpan': False,

    # Change editor size
    'width': '80%',
    'height': '480',

    # Use proper language setting automatically (default)
    'lang': 'zh-CN',

    # 上传图片需要用户先登录.
    'attachment_require_authentication': True,

    # Set `upload_to` function for attachments.
    # 'attachment_upload_to': my_custom_upload_to_func(),

    # Set custom storage class for attachments.
    # 'attachment_storage_class': 'my.custom.storage.class.name',

    # You can completely disable the attachment feature.
    'disable_attachment': False,

    # Set to `True` to return attachment paths in absolute URIs.
    'attachment_absolute_uri': False,

    # test_func in summernote upload view. (Allow upload images only when user passes the test)
    # https://docs.djangoproject.com/en/2.2/topics/auth/default/#django.contrib.auth.mixins.UserPassesTestMixin
    # ```
    # def example_test_func(request):
    #     return request.user.groups.filter(name='group_name').exists()
    # ```
    # 'test_func_upload_view': example_test_func,

    # 懒加载
    'lazy': True,
}
