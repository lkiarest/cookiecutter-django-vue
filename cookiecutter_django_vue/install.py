import os
from django.core.management import execute_from_command_line
from django.contrib.auth.models import User
from django.db import connection
from django.http import HttpResponse


# init datatables and super admin user
def init(request):
    try:
        if check_table_exists('auth_user'):
            has_user = User.objects.count() > 0
            if has_user:
                raise Exception('already installed')

        # migrate
        migrate(request)

        # create super user
        create_superuser(request)

        # TODO your own initialization

        return HttpResponse('install successfully !')
    except Exception as e:
        return HttpResponse('install failed:' + str(e))


def migrate(request):
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cookiecutter_django_vue.settings")
    execute_from_command_line(['manage.py', 'migrate'])
    return HttpResponse('migrated successfully !')


def create_superuser(request):
    name = request.GET.get('name')
    pwd = request.GET.get('pwd')
    email = request.GET.get('email')
    User.objects.create_superuser(username=name, email=email, password=pwd)


def check_table_exists(table_name):
    return table_name in connection.introspection.table_names()
