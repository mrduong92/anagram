<h3>Travis CI <a href="https://travis-ci.org/dung13890/anagram"><img src="https://travis-ci.org/dung13890/anagram.svg" alt="Build Status"></a></h3>

## Installs

```
$ docker-compose build
// Run first only

$ docker-compose up -d

```

## SSH to homestead
```
$ ssh homestead@127.0.0.1
// Password: secret
```

## Mysql
```
$ docker-compose exec mysql /bin/bash
$ mysql -uhomestead -psecret;
```
## Run project
```
$ sudo vim /etc/hosts
127.0.0.1   anagram.dev

http://anagram.dev
```

## Install NPM & Bower
