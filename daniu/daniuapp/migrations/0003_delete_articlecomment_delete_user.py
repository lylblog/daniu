# Generated by Django 4.0.5 on 2022-11-17 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('daniuapp', '0002_remove_article_views_article_description'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ArticleComment',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
