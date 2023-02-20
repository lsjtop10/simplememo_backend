# 프로젝트 개요

# 환경변수

프로젝트를 시작하기 <b>전</b> 반드시 환경변수를 미리 세팅해야 한다

|환경변수 이름|역할|
|---|---|
|MONGODB_ADMIN_NAME|몽고디비 관리자 계정 이름|
|MONGODB_ADMIM_PASSWORD|몽고디비 관리자계정 비밀번호|
|MONGODB_USER_NAME|몽고디비 유저 계정 이름|
|MONGODB_USER_PASSWORD|몽고디비 유저 비밀번호|
|MYSQL_USER_NAME|mysql 유저 이름|
|MYSQL_USER_PASSWORD|mysql 유저 비밀번호|
|MYSQL_ADMIN_PASSWORD|mywql 관리자계정 비밀번호|
|MONGODB_HOST|몽고디비 호스트네임|
|MYSQL_HOST|mysql 호스트네임|

# api 서버
## 환경

- nodejs
- express
- typescript
- 기본 포트번호 8080
## 실행법
- 로컬 환경에서 프로덕션 서버 실행 시
``` 
    # backend/database/api 디렉터리에서 실행하세요
    npm install
    npm run build 
    npm run start
```

- 로컬 환경에서 개발용 서버 실행 시
``` 
    #api 디렉터리에서 실행하세요
    npm install
    npm run dev
```

- 로커로 프로덕션 서버 실행 시
``` 
    #api 디렉터리에서 실행하세요
    docker build -t [이미지 이름] 
    docker run -d -p [원하는 포트]:80 [이미지 이름]
```
- 커스텀 네트워크를 이용해 데이터베이스와 연동하는 것을 추천한다


#  몽고디비 데이터베이스 서버

역할: 메모 게시글을 보관한다

## 실행법  

``` 
    # backend/database/mongodb 디렉터리에서 실행하세요
    docker build -t mongodb .
    docker run -d -p [원하는 포트]:27017 -v "[사용할 데이터 디렉토리]:/data/db" mongodb
```

#  mysql 데이터베이스 서버

역할: 유저 세션을 관리하고 각종 메타데이터를 저장한다

``` 
    # backend/database/mysql 디렉터리에서 실행하세요
    docker build -t mysql .
    docker run -d -p [원하는 포트]:3306 -v "[사용할 데이터 디렉토리]:/data/db" mongodb
```

## 실행법  

``` 
    # backend/database/mysql 디렉터리에서 실행하세요
    docker build -t mysql .
    docker run -d -p [원하는 포트]:27017 -v "[사용할 데이터 디렉토리]:/data/db" mysql
```

# 기타
- 도커 컴포즈는 추후에 도입할 예정이다
- api서버에 데이터베이스 초기화 로직을 넣을지 말지 고민하고 있다