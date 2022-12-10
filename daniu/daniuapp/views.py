from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models import Count
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.template import loader
from django.urls import reverse
from .models import Article, Category
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# 模板页
def base(request):
    # 文章数据
    articles = Article.objects.all().order_by("-created_time")
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################

    # print(categorys[1])
    # print(categorys)
    # 文章渲染至页面
    context = {
        "articles": articles,
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys
    }
    print(context)
    return context
def left_base(request):
    context = base(request)
    # categoryList = Category.objects.values('id').filter(name='Adobe Ps Ai Pr系列')  #显示分类
    # category_list = Category.objects.get(name='Microsoft Office系列')

    categorys = Category.objects.all()

    t = loader.get_template("left_base.html")
    c = {"categorys": categorys}
    # return render(request, "left_base.html",  context=context)
    return HttpResponse(t.render(c, request))









# 首页
def index(request):
    """
    首页视图函数
    按时间倒序，查询前10条
    :param request:
    :return:
    """

    # 文章数据
    articles = Article.objects.all().order_by("-created_time")
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################

    # print(categorys[1])
    # print(categorys)
    # 文章渲染至页面
    context = {
        "articles": articles,
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys
    }

    return render(request, "index.html", context=context)
# 详情页
def info(request,id):
    """
    详情页 需要文章id
    :param request:
    :return:
    """
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return redirect(reverse("daniuapp:index"))
    # 显示分类
    category = Category.objects.get(id=article.category_id)

    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################


    # 上一页、下一页功能
    post = get_object_or_404(Article, id=str(id))

    # postsAll = Article.objects.annotate(num_comment=Count('id')).filter(created_time__isnull=False).order_by('-created_time')  全局上下页

    # 分类内上下页
    # select * from article where category_id = (select category_id from article where id = '传递的id')    SQL原理

    category_id_list = list(Article.objects.filter(id=id).values('category_id'))
    # print(category_id_list)                           # <QuerySet [{'category_id': 8}]>
    # print(category_id_list[0])                        # {'category_id': 10}
    # print(category_id_list[0].get('category_id'))     # 10
    category_id_num = category_id_list[0].get('category_id')
    postsAll = Article.objects.annotate(num_comment=Count('id')).filter(category_id=category_id_num, created_time__isnull=False).order_by('-created_time')
    page_list = list(postsAll)
    if post == page_list[-1]:
        before_page = page_list[-2]
        after_page = None
    elif post == page_list[0]:
        before_page = None
        after_page = page_list[1]
    else:
        situ = page_list.index(post)
        before_page = page_list[situ-1]
        after_page = page_list[situ+1]
    # 一、键值对方式传递参数
    context = {
        "article": article,
        "category": category,
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys,
        "before_page": before_page,
        "after_page": after_page,
    }
    return render(request, "info.html", context=context)
    # 二、context字典方式传递参数
    #return render(request, "info.html", {"article": article, "category": category, 'before_page': before_page, 'after_page': after_page})
# 新详情页
def info_new(request,id):
    """
    详情页 需要文章id
    :param request:
    :return:
    """
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return redirect(reverse("daniuapp:index"))
    # 显示分类
    category = Category.objects.get(id=article.category_id)

    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################

    # 一、键值对方式传递参数
    context = {
        "article": article,
        "category": category,
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys,
    }
    return render(request, "info_new.html", context=context)
# 心得杂坛
def xinde(request):
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:10]
    # 首页左侧列表 ############################################################################
    context = {
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys,
    }

    return render(request, 'xinde.html', context=context)

# 邮件客服
@csrf_exempt
def ncnkefu(request):
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:10]
    # 首页左侧列表 ############################################################################

    return render(request, 'ncnkefu.html', {
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys})


def ncnkefu_res(request):
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:10]
    # 首页左侧列表 ############################################################################
    # POST参数判空
    subject_str = "".join(request.POST.get('subject', ""))
    message_str = "".join(request.POST.get('message', ""))
    if subject_str == "" or message_str == "":
        mail_status = "error 主题或正文为空，请正确填写!"
        return render(request, 'ncnkefu.html', {
            "mail_status": mail_status,
            "categorys": categorys,
            "Microsoft_Office_categorys": Microsoft_Office_categorys,
            "Windows_categorys": Windows_categorys,
            "Adobe_categorys": Adobe_categorys,
            "CAD_categorys": CAD_categorys,
            "Xindezatan_categorys": Xindezatan_categorys})
    else:
        # 发送邮件
        res = send_mail(
            subject=request.POST.get('subject', ""),  # 主题
            message=request.POST.get('message', ""),  # 正文
            # message=request.GET.get('from_email', ""),  # 发件人
            from_email='l2214888601@163.com',  # 发件人
            recipient_list=['l2214888601@163.com'],  # 收件人
            # 收件人可以直接写，也可以从setting.py中配置中导入
            fail_silently=False
        )
        if res == 1:
            mail_status = "success 邮件发送成功！"
            # return HttpResponseRedirect('/ncnkefu.html')
            return render(request, 'ncnkefu.html', {
            "mail_status": mail_status,
            "categorys": categorys,
            "Microsoft_Office_categorys": Microsoft_Office_categorys,
            "Windows_categorys": Windows_categorys,
            "Adobe_categorys": Adobe_categorys,
            "CAD_categorys": CAD_categorys,
            "Xindezatan_categorys": Xindezatan_categorys})
        else:
            mail_status = "error 邮件发送失败！"
            return render(request, 'ncnkefu.html', {
            "mail_status": mail_status,
            "categorys": categorys,
            "Microsoft_Office_categorys": Microsoft_Office_categorys,
            "Windows_categorys": Windows_categorys,
            "Adobe_categorys": Adobe_categorys,
            "CAD_categorys": CAD_categorys,
            "Xindezatan_categorys": Xindezatan_categorys})

# 密码保护：全套学习视频,师夷长技以自强
def other(request):
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################

    # 一、键值对方式传递参数
    context = {
        "categorys": categorys,
        "Microsoft_Office_categorys": Microsoft_Office_categorys,
        "Windows_categorys": Windows_categorys,
        "Adobe_categorys": Adobe_categorys,
        "CAD_categorys": CAD_categorys,
        "Xindezatan_categorys": Xindezatan_categorys,
    }
    return render(request, "other.html", context=context)
def postpassword(request):
    # 首页左侧列表 ############################################################################
    # 分类
    categorys = Category.objects.all()
    # Microsoft Office系列分类下文章
    Microsoft_Office_categorys = Article.objects.filter(category_id='3')[:3]
    # Windows纯净原版分类下文章
    Windows_categorys = Article.objects.filter(category_id='4')[:3]
    # Adobe Ps Ai Pr系列
    Adobe_categorys = Article.objects.filter(category_id='5')[:3]
    # CAD Revit Maya 3D系列
    CAD_categorys = Article.objects.filter(category_id='7')[:3]
    # 心得杂坛
    Xindezatan_categorys = Article.objects.filter(category_id='10')[:3]
    # 首页左侧列表 ############################################################################

    post_passwd = "".join(request.POST.get('post_password', ""))
    if post_passwd == "":
        password_status = "密码不能为空"
        context = {
            "categorys": categorys,
            "Microsoft_Office_categorys": Microsoft_Office_categorys,
            "Windows_categorys": Windows_categorys,
            "Adobe_categorys": Adobe_categorys,
            "CAD_categorys": CAD_categorys,
            "Xindezatan_categorys": Xindezatan_categorys,
            "password_status": password_status,
        }
        return render(request, 'other.html', context=context)
    else:
        passwd = User.objects.all().get(username='other').password
        ret = check_password(post_passwd, passwd)
        if ret == True:
            return HttpResponseRedirect('https://www.baidu.com')
        else:
            password_status = "密码错误"
            context = {
                "categorys": categorys,
                "Microsoft_Office_categorys": Microsoft_Office_categorys,
                "Windows_categorys": Windows_categorys,
                "Adobe_categorys": Adobe_categorys,
                "CAD_categorys": CAD_categorys,
                "Xindezatan_categorys": Xindezatan_categorys,
                "password_status": password_status,
            }
            return render(request, 'other.html', context=context)


# inclusion_tag
