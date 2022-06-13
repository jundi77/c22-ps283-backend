# Calistung API

This is a bare-bones example of a Sinatra application providing a REST
API to a DataMapper-backed model.

This is the frontend application for [Calistung](https://github.com/Chino-ai/Calistung) app. Currently connected to machine learning's service (https://github.com/wdprsto/Calistung_processing).

The entire application is written on node.js using Hapi.js framework.

`.env.example` is example environment file.

`app.yaml` is configuration file for Google App Engine deployment.

`cloudbuild.yaml` is configuration file for Google Cloud Build.

## About The Project
Calistung: Baca, Tulis, Hitung is an application that provide educational features to help children learn to write, read, and count.

## Team Members

### Team ID : C22-PS283
<br>

| Name                      | Student ID   | Path                |
| ------------------------- | ------------ | ------------------- |
| Wahyu Dwi Prasetio        | M2189F1802   | Machine Learning    |
| Kurnia Oktaviani          | M7315G2758   | Machine Learning    |
| Muhammad Ziyad Al Maududi | A2006F0587   | Android Development |
| Ilham Maulana             | A2152G1662   | Android Development |
| Jundullah Hanif Robbani   | C2004F0325   | Cloud Computing     |
| Sani Hamdhani             | C7152G1671   | Cloud Computing     |

<br>

## Install

    npm install

## Setup environment variables

Copy `.env.example` into `.env`, then set the value for the variables in `.env`.

## Run the app

```sh
npm run start
```

or

```sh
npm start
```

# REST API

The REST API to the Calistung frontend API is described below.

## Get hello world for health check

### Request

`GET /`

    curl -i -H 'Accept: application/json' http://localhost:3000/

### Response

    HTTP/1.1 200 OK
    content-type: text/html; charset=utf-8
    cache-control: no-cache
    content-length: 11
    accept-ranges: bytes
    Date: Mon, 13 Jun 2022 03:15:35 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    Hello world

## Get hello world ML service for health check

### Request

`GET /ml`

    curl -i -H 'Accept: application/json' -H 'Authorization: Bearer testing-ml' http://localhost:3000/ml

### Response

    HTTP/1.1 200 OK
    content-type: text/html; charset=utf-8
    cache-control: no-cache
    content-length: 11
    accept-ranges: bytes
    Date: Mon, 13 Jun 2022 03:22:53 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    Hello world

## Get ML service prediction

### Request

`GET /ml`

    curl --request POST \
  --url https://calistung.uc.r.appspot.com/ml/predict \
  --header 'Authorization: Bearer testing-ml' \
  --header 'Content-Type: image/(image type)' \
  --data (image data)

### Response

    HTTP/1.1 200 OK
    content-type: text/html; charset=utf-8
    cache-control: no-cache
    content-length: 11
    accept-ranges: bytes
    Date: Mon, 13 Jun 2022 03:22:54 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"result_predict":"1D"}

## Get MD dummy data

### Request

`GET /md/dummy`

    curl -i -H 'Accept: application/json' http://localhost:3000/md/dummy

### Response

    HTTP/1.1 200 OK
    content-type: application/json; charset=utf-8
    cache-control: no-cache
    content-length: 9272
    vary: accept-encoding
    accept-ranges: bytes
    Date: Mon, 13 Jun 2022 03:30:58 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"angka":{"learnCategories":{"learnCourse":[{"learns":[{"answer":"0","gifLink":"https://i.makeagif.com/media/8-17-2020/cwMkQo.gif","name":"belajar angka 0"},{"answer":"1","gifLink":"https://i.makeagif.com/media/8-17-2020/KyAufF.gif","name":"belajar angka 1"},{"answer":"2","gifLink":"https://i.makeagif.com/media/8-17-2020/qtesC6.gif","name" ....