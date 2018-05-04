#!/bin/sh

(cd ./fe && yarn && yarn build)

python manage.py collectstatic --no-input

python manage.py runserver 0.0.0.0:8080
