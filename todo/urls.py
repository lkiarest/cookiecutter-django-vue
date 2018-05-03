from django.urls import path
from .views import *


urlpatterns = [
    path('', TodoList.as_view()),
    path('/<int:pk>', TodoDetail.as_view()),
]
