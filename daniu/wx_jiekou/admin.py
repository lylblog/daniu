from django.contrib import admin
from .models import test
# Register your models here.
class testlist(admin.ModelAdmin):
    list_display = ['pk', 'titles']
    list_filter = ['titles']
    search_fields = ['titles']
    list_per_page = 6
admin.site.register(test,testlist)