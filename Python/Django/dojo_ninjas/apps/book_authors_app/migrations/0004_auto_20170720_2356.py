# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-20 23:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_authors_app', '0003_auto_20170720_2352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authors',
            name='first_name',
            field=models.CharField(max_length=254),
        ),
    ]
