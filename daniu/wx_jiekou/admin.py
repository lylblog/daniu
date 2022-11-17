from django.contrib import admin

from .models import Student


# Register your models here.
class Studentlist(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ['name']
    search_fields = ['name']
    list_per_page = 6
admin.site.register(Student,Studentlist)
