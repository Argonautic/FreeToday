# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-25 22:16
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventMap', '0005_auto_20170724_2155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='endDate',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 25, 19, 16, 50, 199867)),
        ),
        migrations.AlterField(
            model_name='event',
            name='startDate',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 25, 18, 16, 50, 199867)),
        ),
    ]
