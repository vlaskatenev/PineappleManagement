# Backend project for PM

The project is implemented as an API interface for working 
with [frontend_for_PM](https://github.com/vlaskatenev/frontend_for_PM). 

This is backend apps content is: 
- NGINX in Docker
- pm_functional_server
- pm_main_server
- Redis
- Flower

Requirements - Docker.

## Instructions
[Installation](documents/INSTALLATION.md)

## Apps
### nginx  
Веб-сервер для запуска сайта
### pm_functional_server
Сервер с которым напрямую общаются клиенты - компьютеры
### pm_main_server
- Сайт который видим в браузере
- Основная БД в которой хранятся все данные
- Скрипты python и UI сайта

### Redis
брокер сообщений между клиентом и 
pm_functional_server



Spin up the containers:

```sh
$ docker-compose up -d --build
```

Import dump sql to MySQL in Docker container:

```sh
$ docker exec -i <id container> mysql -uroot -p1234 db_logs12 < mysql/dump_db_logs12.sql
```

Create archive with folder "installSoftScripts" to folder "scriptsForClient"

Для старта фронта:
```sh
$ cd .\pm_ui\
$ npm start
```
На данный момент фронт запускается только в режиме разработки.
Сохранение проекта в дирректории проекта НЕ НАСТРОИЛ!!

