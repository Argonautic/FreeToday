# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-26 19:19
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventMap', '0007_auto_20170726_1518'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 26, 16, 19, 21, 293151)),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_date',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 26, 15, 19, 21, 293151)),
        ),
    ]
