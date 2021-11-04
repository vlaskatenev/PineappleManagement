# Installation
## 1

### Указываем все ключи для работы приложения

- OU
- логин и пароль пользователя под которым будут выполняться все операции с AD
- ключи для установки софта (в моем случае будет уже все заполнено для Гугл хром) 

Добавляем данные в файл:
pm_main_server\services_main_server\Access\access_data.py

Содержимое файла:

```py
# for AD
username_ad = 'login'
password_user_ad = 'password'
server_ad = 'domenNameAD'
server_ad_ip = 'IP'
```
## 2
Архивируем директорию PM\scriptsForClient\scriptsForClientForEdit\installSoftScripts 
в D:\Documents\devProject\PM\scriptsForClient\installSoftScripts.zip

Архив скачивается компьютером клиентом с применением политики AD, в нем находятся универсальные скрипты для установки софта (без конкретного софта).


