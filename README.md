# install

```shell
pip install cookiecutter
cookiecutter gh:lkiarest/cookiecutter-django-vue
```
# config

Config raven dsn in 'settings.py' and 'fe/src/conf/raven.conf.js' if use raven

# start

```shell
./start.sh
```
# initialization

Need run installation before first visit:

# change database config in settings if needed

###

```shell
python manage.py makemigrations
python manage.py migrate
```

### or install remotely
```shell
wget http://host:port/install?name={your-name}&email={your-email}&pwd={admin-password}
```

*password length must be complex enough*
