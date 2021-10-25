url_insert_work_data = 'http://functional-server:8000/functional/insert-work-data'
url_select_worked_data = 'http://functional-server:8000/functional/select-worked-data'

# группа forpm в которой находятся компы для установки софта с помощью PM
# forpm находится в OU allgroup чтобы можно было назначить политику на группу???????
# вот тут нужно разобраться что это такое?????????
ou_from_ad_group = 'CN=forpm,OU=allgroup,DC=npr,DC=nornick,DC=ru'

# OU для всех компов которые видит PM
ou_in_ad_with_computers = 'OU=comps,DC=npr,DC=nornick,DC=ru'

# токен для авторизации на functional-server
authorization_token = 'Token 6845ceea30ebdfd038a0e45324c90d4003803ea8'