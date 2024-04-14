## Установка зависимостей

npm install \--legacy-peer-deps

## Запуск проекта

TOKEN=\<Ваш токен\> npm run start

прим
TOKEN=1111111-QQQQQQQ-JJJJJJJ-2222222 npm run start

## В проекте реализована авторизация.

**Логин**: test@mail.com

**Пароль**: pass

## Стек Технологий

#### Проект разработан на **React** в дополнении с **TypeScript**

**Используемые библиотеки**

ReduxTolkit, для api RTKQuery

**Библиотеки компонент**

Ant Disign

React Slick

**Библиотеки для стилизации**

Tailwincss

ESlint

## Примеры запросов

**Запрос на получение списка всех фильмов**

```
curl
\'https://api.kinopoisk.dev/v1.4/movie?limit=10&page=1\' \\ -H
\'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-fetch-dest:
empty\' \\ -H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site:
cross-site\' \\ -H \'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_6
like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6
Mobile/15E148 Safari/604.1\' \\ -H \'x-api-key:
WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\ \--compressed
```

**Запрос на получение списка всех фильмов c фильтрами**

```
curl
\'https://api.kinopoisk.dev/v1.4/movie?limit=10&page=1&releaseYears.start=2013&releaseYears.end=2013&countries.name=%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F&ageRating=18\'
\\ -H \'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A
Brand\";v=\"8\", \"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\",
\"Yowser\";v=\"2.5\"\' \\ -H \'sec-ch-ua-mobile: ?1\' \\ -H
\'sec-ch-ua-platform: \"Android\"\' \\ -H \'sec-fetch-dest: empty\' \\
-H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site: cross-site\' \\ -H
\'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile
Safari/537.36\' \\ -H \'x-api-key: WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\
\--compressed
```

**Запрос на получение данных по фильму по его ID**

```
curl
\'https://api.kinopoisk.dev/v1.4/movie/535341\' \\ -H \'authority:
api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H \'accept-language:
ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\' \\ -H \'referer:
http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A Brand\";v=\"8\",
\"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\", \"Yowser\";v=\"2.5\"\'
\\ -H \'sec-ch-ua-mobile: ?1\' \\ -H \'sec-ch-ua-platform: \"Android\"\'
\\ -H \'sec-fetch-dest: empty\' \\ -H \'sec-fetch-mode: cors\' \\ -H
\'sec-fetch-site: cross-site\' \\ -H \'user-agent: Mozilla/5.0 (Linux;
Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like
Gecko) Chrome/120.0.0.0 Mobile Safari/537.36\' \\ -H \'x-api-key:
WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\ \--compressed
```

**Запрос на поиск фильма по его названию**

```
curl
\'https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80\'
\\ -H \'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A
Brand\";v=\"8\", \"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\",
\"Yowser\";v=\"2.5\"\' \\ -H \'sec-ch-ua-mobile: ?1\' \\ -H
\'sec-ch-ua-platform: \"Android\"\' \\ -H \'sec-fetch-dest: empty\' \\
-H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site: cross-site\' \\ -H
\'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile
Safari/537.36\' \\ -H \'x-api-key: WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\
\--compressed
```

**Запрос на получение списка серий и сезонов сериала**

```
curl
\'https://api.kinopoisk.dev/v1.4/season?movieId=404900&limit=250&page=1\'
\\ -H \'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A
Brand\";v=\"8\", \"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\",
\"Yowser\";v=\"2.5\"\' \\ -H \'sec-ch-ua-mobile: ?1\' \\ -H
\'sec-ch-ua-platform: \"Android\"\' \\ -H \'sec-fetch-dest: empty\' \\
-H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site: cross-site\' \\ -H
\'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile
Safari/537.36\' \\ -H \'x-api-key: WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\
\--compressed
```

**Запрос на получение постеров к фильму**

```
curl
\'https://api.kinopoisk.dev/v1.4/image?page=1&limit=250&movieId=404900\'
\\ -H \'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A
Brand\";v=\"8\", \"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\",
\"Yowser\";v=\"2.5\"\' \\ -H \'sec-ch-ua-mobile: ?1\' \\ -H
\'sec-ch-ua-platform: \"Android\"\' \\ -H \'sec-fetch-dest: empty\' \\
-H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site: cross-site\' \\ -H
\'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile
Safari/537.36\' \\ -H \'x-api-key: WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\
\--compressed
```

**Запрос на получение отзывов к фильму**

```
curl
\'https://api.kinopoisk.dev/v1.4/review?page=1&limit=250&movieId=404900\'
\\ -H \'authority: api.kinopoisk.dev\' \\ -H \'accept: \*/\*\' \\ -H
\'accept-language: ru,en;q=0.9\' \\ -H \'origin: http://localhost:7070\'
\\ -H \'referer: http://localhost:7070/\' \\ -H \'sec-ch-ua: \"Not_A
Brand\";v=\"8\", \"Chromium\";v=\"120\", \"YaBrowser\";v=\"24.1\",
\"Yowser\";v=\"2.5\"\' \\ -H \'sec-ch-ua-mobile: ?1\' \\ -H
\'sec-ch-ua-platform: \"Android\"\' \\ -H \'sec-fetch-dest: empty\' \\
-H \'sec-fetch-mode: cors\' \\ -H \'sec-fetch-site: cross-site\' \\ -H
\'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile
Safari/537.36\' \\ -H \'x-api-key: WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M\' \\
\--compressed
```
