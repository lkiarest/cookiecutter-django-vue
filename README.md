# config

Config raven dsn in 'settings.py' and 'fe/src/conf/raven.conf.js' if use raven

# start

./start.sh

# initialization

Need run installation before first visit:

```shell

# change database config in settings if needed

python manage.py makemigrations
python manage.py migrate

# install remotely
# wget http://host:port/install?name={your-name}&email={your-email}&pwd={admin-password}
```

*password length must be complex enough*
