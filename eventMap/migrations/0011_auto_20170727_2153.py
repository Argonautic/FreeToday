# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-28 01:53
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventMap', '0010_auto_20170727_1337'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 27, 23, 53, 26, 836857)),
        ),
        migrations.AlterField(
            model_name='event',
            name='lat',
            field=models.DecimalField(decimal_places=17, max_digits=20),
        ),
        migrations.AlterField(
            model_name='event',
            name='lon',
            field=models.DecimalField(decimal_places=17, max_digits=20),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_date',
            field=models.DateTimeField(default=datetime.datetime(2017, 7, 27, 21, 53, 26, 836857)),
        ),
    ]
