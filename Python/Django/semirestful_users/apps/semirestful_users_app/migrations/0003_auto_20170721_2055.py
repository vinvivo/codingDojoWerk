# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-21 20:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('semirestful_users_app', '0002_auto_20170721_2017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(max_length=255),
        ),
    ]