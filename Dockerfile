# 이미지를 Node.js로 빌드
FROM node:alpine as build

# 앱 디렉토리 생성
WORKDIR /app

# apt-get 업데이트 및 wget 설치
RUN apt-get update && \
    apt-get install -y wget

# 앱 종속성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# 앱 빌드
RUN npm run build

# 두 번째 stage: nginx 서버
FROM nginx:alpine

# 이전 stage에서 빌드한 앱을 복사
COPY --from=build /app/build /usr/share/nginx/html

# 80번 포트 노출
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]