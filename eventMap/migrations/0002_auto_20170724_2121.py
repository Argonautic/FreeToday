# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-25 01:21
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventMap', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='endDate',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 24, 22, 21, 49, 743792)),
        ),
        migrations.AlterField(
            model_name='event',
            name='startDate',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 24, 21, 21, 49, 743792)),
        ),
    ]
