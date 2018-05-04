from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializer import *
import logging

logger = logging.getLogger('django')


# Create your views here.
class TodoList(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all().order_by('plan_time')


class TodoDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

{% if cookiecutter.use_sentry == 'y' -%}
class RavenTest(APIView):
    def get(self, request):
        try:
            a = 1 / 0
        except Exception as e:
            logger.error('handler test error', exc_info=True, extra={'request': request,})

        return HttpResponse('exception sent !')
{%- endif %}
