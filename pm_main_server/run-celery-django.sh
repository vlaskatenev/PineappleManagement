#!/bin/sh

# start worker main_server
celery worker --app=main_server > /dev/null 2>&1 & 

# запуск шедуллера:
# https://docs.celeryproject.org/en/stable/userguide/periodic-tasks.html#starting-the-scheduler
# выполнение каждые 10 секунд
# app.conf.beat_schedule = {
#     "add-every-30-seconds": {
#         "task": "main_server.celery.request_data",
#         "schedule": 10.0,
#     },
# }
celery -A main_server beat -l debug --loglevel=info > /dev/null 2>&1 & 
python3 manage.py collectstatic --noinput
python3 manage.py runserver 0.0.0.0:8000