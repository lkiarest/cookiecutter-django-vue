from django.urls import path
from .views import *


urlpatterns = [
    path('', TodoList.as_view()),
    path('<int:pk>', TodoDetail.as_view()),
{% if cookiecutter.use_sentry == 'y' -%}
    path('raven', RavenTest.as_view()),
{%- endif %}
]
