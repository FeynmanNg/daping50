# 部署须知

1. public/config.js 配置域名、定时器等
2. src/helper/api..js 根据环境可配置接口


# nginx

server {
    listen      8550;
    server_name localhost;

    location / {
        root /u01/daPing/dist/;
        index index.html;
    }

    location /api/ {
        proxy_pass http://39.102.197.43:8550;
    }

    location /dev/ {
        alias /u01/daPing/test/dist/dev/;
        index index.html;
        try_files $uri $uri/ /test/dist/dev/index/html;
    }
}