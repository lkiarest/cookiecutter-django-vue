FROM registry.cn-hangzhou.aliyuncs.com/lkiarest/django:alpine

WORKDIR /usr/src/app

#RUN apk --no-cache add openssl # for https request

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
