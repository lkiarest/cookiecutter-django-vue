from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializer import *


# Create your views here.
class TodoList(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all().order_by('plan_time')


class TodoDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
