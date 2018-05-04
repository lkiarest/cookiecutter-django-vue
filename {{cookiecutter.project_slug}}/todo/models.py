from django.db import models
from django.utils import timezone

# Create your models here.
class Todo(models.Model):
    title = models.TextField('说明')
    plan_time = models.DateTimeField('计划完成时间')
    create_time = models.DateTimeField('创建时间', default=timezone.now, blank=True)
    done = models.BooleanField('是否完成', default=False)
