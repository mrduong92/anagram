<h3>Travis CI <a href="https://travis-ci.org/dung13890/anagram"><img src="https://travis-ci.org/dung13890/anagram.svg" alt="Build Status"></a></h3>

## SETUP Environment

```
$ docker-compose build
//Run first only
$ docker-compose up -d

```

## SETUP Project
```
//ssh to homestead with password: secret
$ ssh homestead@127.0.0.1
$ cd /apps

* Install dependencies *
$ composer install
$ npm install
$ bower install

* create env *
$ cp .env.example .env

* Migrate database *
$ php artisan migrate:refresh


* Compiling assets*
$ npm run dev && npm run watch

```

## Run project
```
$ sudo vim /etc/hosts
127.0.0.1   anagram.dev

```
