# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-20 21:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ninja',
            name='first_name',
            field=models.CharField(max_length=254),
        ),
    ]
