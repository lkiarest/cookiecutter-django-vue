from .models import *
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    plan_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = Todo
        fields = ('id', 'title', 'plan_time', 'create_time', 'done',)
