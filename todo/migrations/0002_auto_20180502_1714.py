# Generated by Django 2.0.4 on 2018-05-02 17:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='done',
            field=models.BooleanField(default=False, verbose_name='是否完成'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='create_time',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, verbose_name='创建时间'),
        ),
    ]
