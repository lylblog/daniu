from django.db import models

# Create your models here.

class test(models.Model):
    titles = models.CharField(u'标题', max_length=256)
    contents = models.CharField(u'内容', max_length=256)
    #pub_date = models.DateTimeField(u'发表时间', auto_now_add=True, editable=True)
    #update_time = models.DateTimeField(u'更新时间', auto_now=True, null=True)
    def __str__(self):
        return self.titles