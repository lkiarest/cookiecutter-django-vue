import random


def get_random_string(length=50, allowed_chars='abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'):
    return ''.join(random.choice(allowed_chars) for i in range(length))


def set_secret_key():
    with open('{{cookiecutter.project_slug}}/settings.py', "r+") as f:
        content = f.read().replace('--SECRET_KEY--', get_random_string())
        f.seek(0)
        f.write(content)
        f.truncate()


set_secret_key()
